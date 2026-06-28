import { prisma } from "../../../lib/prisma";
import { actorCreateManyInput, actorUpdateInput } from "../../generated/prisma/models";

export abstract class ActorRepository {
    static async getAll() {
        return await prisma.actor.findMany();
    }

    static async create(actors: actorCreateManyInput[]) {
        return await Promise.all(
            actors.map((data) => prisma.actor.create({ data }))
        );
    }

    static async update(id: string, data: actorUpdateInput) {
        return await prisma.actor.update({
            where: {
                id: id
            },
            data: data
        });
    }

    static async delete(id: string) {
        return await prisma.actor.delete({
            where: {
                id: id
            }
        });
    }

}