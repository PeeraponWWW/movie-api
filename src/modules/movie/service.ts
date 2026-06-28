import { movieCreateManyInput, movieUpdateInput } from "../../generated/prisma/models";
import { MovieRepository } from "./repository";

export abstract class MovieService {
    static getAll() {
        return MovieRepository.getAll();
    }

    static create(movies: movieCreateManyInput[]) {
        return MovieRepository.create(movies);
    }

    static update(id: string, data: movieUpdateInput) {
        return MovieRepository.update(id, data);
    }

    static delete(id: string) {
        return MovieRepository.delete(id);
    }
}