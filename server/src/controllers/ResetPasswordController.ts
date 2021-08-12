import { Request, Response } from 'express';
import { ResetPasswordService } from '../services/ResetPasswordService';

class ResetPasswordController {
  async handle(req: Request, res: Response) {
    const { token, password } = req.body;

    const resetPasswordService = new ResetPasswordService();
    await resetPasswordService.execute({ token, password });

    res.status(200).send();
  }
}

export { ResetPasswordController };
