import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const movie_genrePlain = t.Object(
  { id: t.String(), movie_id: t.String(), genre_id: t.String() },
  { additionalProperties: false },
);

export const movie_genreRelations = t.Object(
  {
    movie: t.Object(
      {
        id: t.String(),
        title: t.String(),
        synopsis: t.String(),
        duration: t.Integer(),
        releaseDate: t.Date(),
        createdAt: t.Date(),
        updatedAt: t.Date(),
        expiresAt: __nullable__(t.Date()),
      },
      { additionalProperties: false },
    ),
    genre: t.Object(
      {
        id: t.String(),
        name: t.String(),
        createdAt: t.Date(),
        updatedAt: t.Date(),
        expiresAt: __nullable__(t.Date()),
      },
      { additionalProperties: false },
    ),
  },
  { additionalProperties: false },
);

export const movie_genrePlainInputCreate = t.Object(
  {},
  { additionalProperties: false },
);

export const movie_genrePlainInputUpdate = t.Object(
  {},
  { additionalProperties: false },
);

export const movie_genreRelationsInputCreate = t.Object(
  {
    movie: t.Object(
      {
        connect: t.Object(
          {
            id: t.String({ additionalProperties: false }),
          },
          { additionalProperties: false },
        ),
      },
      { additionalProperties: false },
    ),
    genre: t.Object(
      {
        connect: t.Object(
          {
            id: t.String({ additionalProperties: false }),
          },
          { additionalProperties: false },
        ),
      },
      { additionalProperties: false },
    ),
  },
  { additionalProperties: false },
);

export const movie_genreRelationsInputUpdate = t.Partial(
  t.Object(
    {
      movie: t.Object(
        {
          connect: t.Object(
            {
              id: t.String({ additionalProperties: false }),
            },
            { additionalProperties: false },
          ),
        },
        { additionalProperties: false },
      ),
      genre: t.Object(
        {
          connect: t.Object(
            {
              id: t.String({ additionalProperties: false }),
            },
            { additionalProperties: false },
          ),
        },
        { additionalProperties: false },
      ),
    },
    { additionalProperties: false },
  ),
);

export const movie_genreWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.String(),
          movie_id: t.String(),
          genre_id: t.String(),
        },
        { additionalProperties: false },
      ),
    { $id: "movie_genre" },
  ),
);

export const movie_genreWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object({ id: t.String() }, { additionalProperties: false }),
          { additionalProperties: false },
        ),
        t.Union([t.Object({ id: t.String() })], {
          additionalProperties: false,
        }),
        t.Partial(
          t.Object({
            AND: t.Union([
              Self,
              t.Array(Self, { additionalProperties: false }),
            ]),
            NOT: t.Union([
              Self,
              t.Array(Self, { additionalProperties: false }),
            ]),
            OR: t.Array(Self, { additionalProperties: false }),
          }),
          { additionalProperties: false },
        ),
        t.Partial(
          t.Object(
            { id: t.String(), movie_id: t.String(), genre_id: t.String() },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "movie_genre" },
);

export const movie_genreSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      movie_id: t.Boolean(),
      genre_id: t.Boolean(),
      movie: t.Boolean(),
      genre: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const movie_genreInclude = t.Partial(
  t.Object(
    { movie: t.Boolean(), genre: t.Boolean(), _count: t.Boolean() },
    { additionalProperties: false },
  ),
);

export const movie_genreOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      movie_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      genre_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const movie_genre = t.Composite(
  [movie_genrePlain, movie_genreRelations],
  { additionalProperties: false },
);

export const movie_genreInputCreate = t.Composite(
  [movie_genrePlainInputCreate, movie_genreRelationsInputCreate],
  { additionalProperties: false },
);

export const movie_genreInputUpdate = t.Composite(
  [movie_genrePlainInputUpdate, movie_genreRelationsInputUpdate],
  { additionalProperties: false },
);
