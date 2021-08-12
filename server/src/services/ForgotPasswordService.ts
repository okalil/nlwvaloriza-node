import { getCustomRepository } from 'typeorm';
import { UsersRepositories } from '../repositories/UsersRepositories';
import crypto from 'crypto';

interface IForgotPasswordRequest {
  email: string;
}

class ForgotPasswordService {
  async execute({ email }: IForgotPasswordRequest) {
    const usersRepositories = getCustomRepository(UsersRepositories);
    const user = await usersRepositories.findOne({ email });

    if (!user) throw new Error('Email invalid!');

    const token = crypto.randomBytes(20).toString('hex');
    const now = new Date();
    now.setHours(now.getHours() + 1);

    user.password_reset_token = token;
    user.password_reset_expires = now;

    await usersRepositories.save(user);

    return user.password_reset_token;
  }
}

export { ForgotPasswordService };
