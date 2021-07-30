import { classToPlain } from "class-transformer";
import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";

class ListComplimentsService {
    async execute() {
        const complimentsRepositories = getCustomRepository(
            ComplimentsRepositories
        );

        const compliments = await complimentsRepositories.find({
            relations: ["userSender", "userReceiver", "tag"],
        });

        return classToPlain(compliments);
    }
}

export { ListComplimentsService };
