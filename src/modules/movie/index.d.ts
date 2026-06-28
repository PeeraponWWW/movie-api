import Elysia from "elysia";
export declare const movie: Elysia<"/movie", {
    decorator: {};
    store: {};
    derive: {};
    resolve: {};
}, {
    typebox: {};
    error: {};
}, {
    schema: {};
    standaloneSchema: {};
    macro: {};
    macroFn: {};
    parser: {};
    response: {};
}, {
    movie: {
        get: {
            body: unknown;
            params: {};
            query: unknown;
            headers: unknown;
            response: {
                200: {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    expiresAt: Date | null;
                    title: string;
                    synopsis: string;
                    duration: number;
                    releaseDate: Date;
                }[];
                422: {
                    type: "validation";
                    on: string;
                    summary?: string;
                    message?: string;
                    found?: unknown;
                    property?: string;
                    expected?: string;
                };
            };
        };
    };
} & {
    movie: {
        post: {
            body: {
                expiresAt?: Date | null | undefined;
                duration?: number | undefined;
                title: string;
                synopsis: string;
                releaseDate: Date;
            }[];
            params: {};
            query: unknown;
            headers: unknown;
            response: {
                200: {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    expiresAt: Date | null;
                    title: string;
                    synopsis: string;
                    duration: number;
                    releaseDate: Date;
                }[];
                422: {
                    type: "validation";
                    on: string;
                    summary?: string;
                    message?: string;
                    found?: unknown;
                    property?: string;
                    expected?: string;
                };
            };
        };
    };
} & {
    movie: {
        ":id": {
            put: {
                body: {
                    expiresAt?: Date | null | undefined;
                    title?: string | undefined;
                    synopsis?: string | undefined;
                    duration?: number | undefined;
                    releaseDate?: Date | undefined;
                };
                params: {
                    id: string;
                };
                query: unknown;
                headers: unknown;
                response: {
                    200: {
                        id: string;
                        createdAt: Date;
                        updatedAt: Date;
                        expiresAt: Date | null;
                        title: string;
                        synopsis: string;
                        duration: number;
                        releaseDate: Date;
                    };
                    422: {
                        type: "validation";
                        on: string;
                        summary?: string;
                        message?: string;
                        found?: unknown;
                        property?: string;
                        expected?: string;
                    };
                };
            };
        };
    };
} & {
    movie: {
        ":id": {
            delete: {
                body: unknown;
                params: {
                    id: string;
                };
                query: unknown;
                headers: unknown;
                response: {
                    200: {
                        id: string;
                        createdAt: Date;
                        updatedAt: Date;
                        expiresAt: Date | null;
                        title: string;
                        synopsis: string;
                        duration: number;
                        releaseDate: Date;
                    };
                    422: {
                        type: "validation";
                        on: string;
                        summary?: string;
                        message?: string;
                        found?: unknown;
                        property?: string;
                        expected?: string;
                    };
                };
            };
        };
    };
}, {
    derive: {};
    resolve: {};
    schema: {};
    standaloneSchema: {};
    response: {};
}, {
    derive: {};
    resolve: {};
    schema: {};
    standaloneSchema: {};
    response: {};
}>;
