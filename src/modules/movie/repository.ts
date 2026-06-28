import { prisma } from "../../../lib/prisma";
import { movieCreateManyInput, movieUpdateInput } from "../../generated/prisma/models";

export abstract class MovieRepository {
    static async getAll() {
        return await prisma.movie.findMany();
    }

    static async create(movies: movieCreateManyInput[]) {
        return await Promise.all(
            movies.map((data) => prisma.movie.create({ data }))
        );
    }

    static async update(id: string, data: movieUpdateInput) {
        return await prisma.movie.update({
            where: {
                id: id
            },
            data: data
        });
    }

    static async delete(id: string) {
        return await prisma.movie.delete({
            where: {
                id: id
            }
        });
    }

}