import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface IAuthenticateRequest {
    email: string;
    password: string;
}

class AuthenticateUserService {
    async execute({ email, password }: IAuthenticateRequest) {
        const usersRepositories = getCustomRepository(UsersRepositories);

        const user = await usersRepositories.findOne({ email });

        if (!user) {
            throw new Error("Email/Password Incorrect");
        }

        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) {
            throw new Error("Email/Password Incorrect");
        }

        const token = sign(
            { email: user.email },
            "e824010cf4bd347616119e90f229fcb4",
            {
                subject: user.id,
                expiresIn: "1d",
            }
        );

        return token;
    }
}

export { AuthenticateUserService };
