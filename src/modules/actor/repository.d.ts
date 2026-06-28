import { actorCreateManyInput, actorUpdateInput } from "../../generated/prisma/models";
export declare abstract class ActorRepository {
    static getAll(): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        expiresAt: Date | null;
    }[]>;
    static create(actors: actorCreateManyInput[]): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        expiresAt: Date | null;
    }[]>;
    static update(id: string, data: actorUpdateInput): Promise<{
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
