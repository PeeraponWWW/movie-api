export declare const moviePlain: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TString;
    title: import("@sinclair/typebox").TString;
    synopsis: import("@sinclair/typebox").TString;
    duration: import("@sinclair/typebox").TInteger;
    releaseDate: import("@sinclair/typebox").TDate;
    createdAt: import("@sinclair/typebox").TDate;
    updatedAt: import("@sinclair/typebox").TDate;
    expiresAt: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNull, import("@sinclair/typebox").TDate]>;
}>;
export declare const movieRelations: import("@sinclair/typebox").TObject<{
    genres: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TString;
        movie_id: import("@sinclair/typebox").TString;
        genre_id: import("@sinclair/typebox").TString;
    }>>;
    actors: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TString;
        movie_id: import("@sinclair/typebox").TString;
        actor_id: import("@sinclair/typebox").TString;
    }>>;
}>;
export declare const moviePlainInputCreate: import("@sinclair/typebox").TObject<{
    title: import("@sinclair/typebox").TString;
    synopsis: import("@sinclair/typebox").TString;
    duration: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
    releaseDate: import("@sinclair/typebox").TDate;
    expiresAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNull, import("@sinclair/typebox").TDate]>>;
}>;
export declare const moviePlainInputUpdate: import("@sinclair/typebox").TObject<{
    title: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    synopsis: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    duration: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
    releaseDate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TDate>;
    expiresAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNull, import("@sinclair/typebox").TDate]>>;
}>;
export declare const movieRelationsInputCreate: import("@sinclair/typebox").TObject<{
    genres: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        connect: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TString;
        }>>;
    }>>;
    actors: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        connect: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TString;
        }>>;
    }>>;
}>;
export declare const movieRelationsInputUpdate: import("@sinclair/typebox").TObject<{
    genres: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        connect: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TString;
        }>>>;
        disconnect: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TString;
        }>>>;
    }>>;
    actors: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        connect: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TString;
        }>>>;
        disconnect: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TString;
        }>>>;
    }>>;
}>;
export declare const movieWhere: import("@sinclair/typebox").TRecursive<import("@sinclair/typebox").TObject<{
    AND: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TThis, import("@sinclair/typebox").TArray<import("@sinclair/typebox").TThis>]>>;
    NOT: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TThis, import("@sinclair/typebox").TArray<import("@sinclair/typebox").TThis>]>>;
    OR: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TThis>>;
    id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    title: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    synopsis: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    duration: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
    releaseDate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TDate>;
    createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TDate>;
    updatedAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TDate>;
    expiresAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TDate>;
}>>;
export declare const movieWhereUnique: import("@sinclair/typebox").TRecursive<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
}>, import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TString;
}>, import("@sinclair/typebox").TObject<{
    AND: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TThis, import("@sinclair/typebox").TArray<import("@sinclair/typebox").TThis>]>>;
    NOT: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TThis, import("@sinclair/typebox").TArray<import("@sinclair/typebox").TThis>]>>;
    OR: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TThis>>;
}>, import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    title: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    synopsis: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    duration: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
    releaseDate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TDate>;
    createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TDate>;
    updatedAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TDate>;
    expiresAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TDate>;
}>]>>;
export declare const movieSelect: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
    title: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
    synopsis: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
    duration: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
    releaseDate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
    genres: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
    actors: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
    createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
    updatedAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
    expiresAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
    _count: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
}>;
export declare const movieInclude: import("@sinclair/typebox").TObject<{
    genres: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
    actors: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
    _count: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
}>;
export declare const movieOrderBy: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"asc">, import("@sinclair/typebox").TLiteral<"desc">]>>;
    title: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"asc">, import("@sinclair/typebox").TLiteral<"desc">]>>;
    synopsis: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"asc">, import("@sinclair/typebox").TLiteral<"desc">]>>;
    duration: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"asc">, import("@sinclair/typebox").TLiteral<"desc">]>>;
    releaseDate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"asc">, import("@sinclair/typebox").TLiteral<"desc">]>>;
    createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"asc">, import("@sinclair/typebox").TLiteral<"desc">]>>;
    updatedAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"asc">, import("@sinclair/typebox").TLiteral<"desc">]>>;
    expiresAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"asc">, import("@sinclair/typebox").TLiteral<"desc">]>>;
}>;
export declare const movie: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TString;
    createdAt: import("@sinclair/typebox").TDate;
    updatedAt: import("@sinclair/typebox").TDate;
    expiresAt: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNull, import("@sinclair/typebox").TDate]>;
    title: import("@sinclair/typebox").TString;
    synopsis: import("@sinclair/typebox").TString;
    duration: import("@sinclair/typebox").TInteger;
    releaseDate: import("@sinclair/typebox").TDate;
    genres: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TString;
        movie_id: import("@sinclair/typebox").TString;
        genre_id: import("@sinclair/typebox").TString;
    }>>;
    actors: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TString;
        movie_id: import("@sinclair/typebox").TString;
        actor_id: import("@sinclair/typebox").TString;
    }>>;
}>;
export declare const movieInputCreate: import("@sinclair/typebox").TObject<{
    expiresAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNull, import("@sinclair/typebox").TDate]>>;
    title: import("@sinclair/typebox").TString;
    synopsis: import("@sinclair/typebox").TString;
    duration: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
    releaseDate: import("@sinclair/typebox").TDate;
    genres: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        connect: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TString;
        }>>;
    }>>;
    actors: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        connect: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TString;
        }>>;
    }>>;
}>;
export declare const movieInputUpdate: import("@sinclair/typebox").TObject<{
    expiresAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNull, import("@sinclair/typebox").TDate]>>;
    title: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    synopsis: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    duration: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
    releaseDate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TDate>;
    genres: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        connect: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TString;
        }>>>;
        disconnect: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TString;
        }>>>;
    }>>;
    actors: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        connect: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TString;
        }>>>;
        disconnect: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TString;
        }>>>;
    }>>;
}>;
