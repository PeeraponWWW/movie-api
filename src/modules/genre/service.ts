import { genreCreateManyInput, genreUpdateInput } from "../../generated/prisma/models";
import { GenreRepository } from "./repository";

export abstract class GenreService {
    static getAll() {
        return GenreRepository.getAll();
    }

    static create(genres: genreCreateManyInput[]) {
        return GenreRepository.create(genres);
    }

    static update(id: string, data: genreUpdateInput) {
        return GenreRepository.update(id, data);
    }

    static delete(id: string) {
        return GenreRepository.delete(id);
    }

}