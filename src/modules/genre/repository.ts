import { prisma } from "../../../lib/prisma";
import { genreCreateManyInput, genreUpdateInput } from "../../generated/prisma/models";

export abstract class GenreRepository {
    static async getAll() {
        return await prisma.genre.findMany();
    }

    static async create(genres: genreCreateManyInput[]) {
        return await Promise.all(
            genres.map((data) => prisma.genre.create({ data }))
        );
    }

    static async update(id: string, data: genreUpdateInput) {
        return await prisma.genre.update({
            where: {
                id: id
            },
            data: data
        });
    }

    static async delete(id: string) {
        return await prisma.genre.delete({
            where: {
                id: id
            }
        });
    }

}