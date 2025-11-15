import nodemailer from "nodemailer";

export const mailer = async (
  to: string | string[],
  subject: string,
  html: string,
  bcc?: string | string[],
  attachments?: {
    filename: string;
    path?: string;
    content?: Buffer | string;
    contentType?: string;
  }[],
  cc?: string | string[],
  from?: string,
  text?: string
) => {
  const transporter = nodemailer.createTransport({
    port: 465,
    host: process.env.MAIL_HOST,
    secure: true,
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
      minVersion: "TLSv1.2",
    },
  });

  await transporter
    .sendMail({
      from: '"Investereninlombok.nl | Zuid-Lombok vastgoed" <noreply@investereninlombok.nl>',
      to,
      bcc,
      subject,
      text: "",
      html,
      attachments,
    })
    .then((info) => {
      console.log("Mail sent successfully!!");
      console.log(info);
      return info;
    });
};

export default mailer;
