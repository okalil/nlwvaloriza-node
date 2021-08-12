import { Request, Response } from 'express';
import { ForgotPasswordService } from '../services/ForgotPasswordService';
import { sendMail } from '../modules/mailer';

class ForgotPasswordController {
  async handle(req: Request, res: Response) {
    const { email } = req.body;

    const forgotPasswordService = new ForgotPasswordService();
    const token = await forgotPasswordService.execute({ email });

    sendMail({
      to: email,
      from: 'kalilmagal@gmail.com',
      subject: 'Redefina sua senha',
      template: '/forgot_password',
      context: {
        token,
      },
    });

    return res.status(200).send();
  }
}

export { ForgotPasswordController };
