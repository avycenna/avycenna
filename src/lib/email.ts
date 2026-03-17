import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: Number(process.env.SMTP_PORT) === 465, // true for 465
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  },
  tls: {
    // Only disable certificate verification in development for testing
    rejectUnauthorized: process.env.NODE_ENV === 'production'
  }
});

type EmailProps = {
  to: string | string[],
  subject: string,
  emailHtml: string,
  emailText: string,
}

export async function sendEmail({ to, subject, emailHtml, emailText }: EmailProps) {
  const from = `Avycenna Inquiries <${process.env.SMTP_USER!}>`;
  return await transporter.sendMail({
    from,
    to,
    subject: subject,
    html: emailHtml,
    text: emailText,
  });
}
