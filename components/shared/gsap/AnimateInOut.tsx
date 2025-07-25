import { Animation } from '@/types/animations';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import React, { useRef } from 'react';
import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect';
import useNavigationContext from '@/context/navigationContext';
import useTransitionContext from '@/context/transitionContext';
import { useRouter } from 'next-translate-routes';

function AnimateInOut({
    children,
    durationIn,
    durationOut,
    delay,
    delayOut,
    easeOut,
    from,
    to,
    outro,
    skipOutro,
    watch,
    start,
    end,
    scrub,
    markers
}: Animation) {
    const { locale } = useRouter();
    const { currentLocale } = useNavigationContext();
    const { timeline } = useTransitionContext();
    const element = useRef<HTMLDivElement | null>(null);
    const animation = useRef<GSAPTween | null>(null);

    const animate = () => {
        const scrollTrigger = watch ? {
            scrollTrigger: {
                trigger: element.current,
                start,
                end,
                scrub,
                markers: markers
            }
        } : {};

        const anim = gsap.to(element.current, {
            ...to,
            delay,
            duration: durationIn,
            ...scrollTrigger
        });

        animation.current = anim;
    };

    const animateOutro = () => {
        if (!skipOutro) {
            const outroProperties = outro ?? from;
            timeline?.add(
                gsap.to(element.current, {
                    ease: easeOut,
                    ...outroProperties,
                    delay: delayOut,
                    duration: durationOut
                }),
                0
            );
        }
    };

    useIsomorphicLayoutEffect(() => {
        const ctx = gsap.context(() => {
            /* Intro animation */
            animate();

            /* Outro animation */
            animateOutro();
        });
        return () => ctx.revert();
    }, []);

    useIsomorphicLayoutEffect(() => {
        if (currentLocale !== locale) {
            const ctx = gsap.context(() => {
                /* Kills animation */
                animation.current?.kill();

                const isInViewport = ScrollTrigger.isInViewport(element.current as Element);
                const isAboveViewport = ScrollTrigger.positionInViewport(element.current as Element, 'bottom') <= 0;

                /* Intro animation */
                if (!isInViewport && !isAboveViewport) {
                    gsap.set(element.current, {
                        ...from
                    });
                    animate();
                } else {
                    gsap.set(element.current, {
                        ...to
                    });
                    animation.current = null;
                }

                /* Outro animation */
                animateOutro();
            });
            return () => ctx.revert();
        }
    }, [locale]);

    return (
        <div ref={element} style={from}>
            {children}
        </div>
    )
}

export default React.memo(AnimateInOut);