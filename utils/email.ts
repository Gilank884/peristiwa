import { Attachment, Mail, MailFrom, MailTemplate } from '@/types/form/email';
import { Fields, Labels } from '@/types/form';
import sendGrid from '@sendgrid/mail';

sendGrid.setApiKey(process.env.SENDGRID_API_KEY);

export default class Email implements Mail {
  siteName: string;
  host: string;
  template: string;
  labels: Labels;
  fields: Fields;
  to: string;
  from: MailFrom;
  subject: string;
  attachments?: Attachment[];

  constructor(template: string, subject: string, labels: Labels, fields: Fields, attachments: Attachment[]) {
    this.siteName = process.env.NEXT_PUBLIC_SITE_NAME;
    this.host = process.env.NEXT_PUBLIC_BASE_URL;
    this.template = template;
    this.labels = labels;
    this.fields = fields;

    // Tujuan email selalu ke kamu
    this.to = 'gilankprasetyo8@gmail.com';

    // Pengirim harus email yang diverifikasi di SendGrid (email kamu)
    this.from = {
      email: 'gilankprasetyo8@gmail.com',
      name: `${fields?.firstname} ${fields?.lastname}` // Nama dari pengunjung
    };

    this.subject = subject;
    this.attachments = attachments;
  }

  async send() {
    const mailOptions = {
      to: this.to,
      from: this.from,
      replyTo: {
        email: this.fields?.email,
        name: `${this.fields?.firstname} ${this.fields?.lastname}`
      },
      subject: this.subject,
      ...this.generateTemplate(),
      attachments: this.attachments
    };

    await sendGrid.send(mailOptions);
  }

  generateTemplate(): MailTemplate {
    const content = Object.entries(this.fields).reduce((str, [key, value]) => {
      return (str += `<p style="margin: .4em 0 1.1875em; font-size: 16px; line-height: 1.625; color: #51545E;"><strong>${this.labels?.[key]}: </strong>${value}</p>`);
    }, '');

    this.template = this.template
      .replaceAll('%SITENAME%', this.siteName)
      .replaceAll('%HOST%', this.host)
      .replace('%CONTENT%', content)
      .replace('%YEAR%', new Date().getFullYear().toString());

    return {
      html: this.template
    };
  }
}
