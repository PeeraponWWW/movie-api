import { genreCreateManyInput, genreUpdateInput } from "../../generated/prisma/models";
export declare abstract class GenreRepository {
    static getAll(): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        expiresAt: Date | null;
    }[]>;
    static create(genres: genreCreateManyInput[]): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        expiresAt: Date | null;
    }[]>;
    static update(id: string, data: genreUpdateInput): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        expiresAt: Date | null;
    }>;
    static delete(id: string): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        expiresAt: Date | null;
    }>;
}
