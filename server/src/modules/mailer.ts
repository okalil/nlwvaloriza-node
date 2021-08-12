import nodemailer from 'nodemailer';
import path from 'path';
import hbs from 'nodemailer-express-handlebars';
import 'dotenv/config';

const transport = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: Number(process.env.MAIL_PORT),
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

const defaultPath = path.resolve(__dirname, '../views/mail/');

transport.use(
  'compile',
  hbs({
    viewEngine: {
      layoutsDir: path.resolve(defaultPath, 'layouts'),
      partialsDir: path.resolve(defaultPath, 'partials'),
      defaultLayout: 'default',
      extname: '.html',
    },
    viewPath: defaultPath,
    extName: '.html',
  })
);

interface MailOptions {
  to: string;
  from?: string;
  subject?: string;
  template?: string;
  context?: any;
}

function sendMail({
  to,
  from = 'kalilmagal@gmail.com',
  subject,
  template,
  context,
}: MailOptions) {
  transport.sendMail(
    {
      to,
      from,
      subject,
      template,
      context,
    } as MailOptions,
    err => {
      if (err) {
        console.log('error on send mail', err);
        return;
      }
      return;
    }
  );
}

export { sendMail };

export default transport;
