import { movieCreateManyInput, movieUpdateInput } from "../../generated/prisma/models";
export declare abstract class MovieRepository {
    static getAll(): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        expiresAt: Date | null;
        title: string;
        synopsis: string;
        duration: number;
        releaseDate: Date;
    }[]>;
    static create(movies: movieCreateManyInput[]): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        expiresAt: Date | null;
        title: string;
        synopsis: string;
        duration: number;
        releaseDate: Date;
    }[]>;
    static update(id: string, data: movieUpdateInput): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        expiresAt: Date | null;
        title: string;
        synopsis: string;
        duration: number;
        releaseDate: Date;
    }>;
    static delete(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        expiresAt: Date | null;
        title: string;
        synopsis: string;
        duration: number;
        releaseDate: Date;
    }>;
}
