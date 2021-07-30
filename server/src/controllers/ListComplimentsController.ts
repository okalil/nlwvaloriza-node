import { Request, Response } from "express";
import { ListComplimentsService } from "../services/ListCompliments";

class ListComplimentsController {
    async handle(req: Request, res: Response) {
        const listComplimentsService = new ListComplimentsService();
        const compliments = await listComplimentsService.execute();

        return res.json(compliments);
    }
}

export { ListComplimentsController };
