import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
    sub: string
}

export function ensureAuthenticated(
    req: Request,
    res: Response,
    next: NextFunction
) {
    //Receber o token
    const authToken = req.headers.authorization;

    //Validar se token está preenchido
    if (!authToken) {
        return res.status(401).end();
    }

    //Validar se token é válido
    const [, token] = authToken.split(" ");

    try {
        const {sub} = verify(token, "e824010cf4bd347616119e90f229fcb4") as IPayload;
        req.user_id = sub

        return next();

    } catch (err) {
        return res.status(401).end();
    }

    //Recuperar informações do usuário
}
