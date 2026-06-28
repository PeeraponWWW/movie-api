import { actorCreateManyInput, actorUpdateInput } from "../../generated/prisma/models";
import { ActorRepository } from "./repository";

export abstract class ActorService {
    static getAll() {
        return ActorRepository.getAll();
    }

    static create(actors: actorCreateManyInput[]) {
        return ActorRepository.create(actors);
    }

    static update(id: string, data: actorUpdateInput) {
        return ActorRepository.update(id, data);
    }

    static delete(id: string) {
        return ActorRepository.delete(id);
    }

}