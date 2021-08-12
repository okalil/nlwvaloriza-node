import { hash } from 'bcryptjs';
import { getCustomRepository } from 'typeorm';
import { UsersRepositories } from '../repositories/UsersRepositories';

class ResetPasswordService {
  async execute({ token, password }) {
    const usersRepositories = getCustomRepository(UsersRepositories);
    const user = await usersRepositories.findOne({
      password_reset_token: token,
    });

    if (!user) throw new Error('Your token is invalid or expired!');

    const now = new Date();

    if (now > user.password_reset_expires)
      throw new Error('Your token is invalid or expired!');

    user.password = await hash(password, 8);
    user.password_reset_token = null;
    user.password_reset_expires = null;

    await usersRepositories.save(user);
  }
}

export { ResetPasswordService };
