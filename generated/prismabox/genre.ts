import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const genrePlain = t.Object(
  {
    id: t.String(),
    name: t.String(),
    createdAt: t.Date(),
    updatedAt: t.Date(),
    expiresAt: __nullable__(t.Date()),
  },
  { additionalProperties: false },
);

export const genreRelations = t.Object(
  {
    movie: t.Array(
      t.Object(
        { id: t.String(), movie_id: t.String(), genre_id: t.String() },
        { additionalProperties: false },
      ),
      { additionalProperties: false },
    ),
  },
  { additionalProperties: false },
);

export const genrePlainInputCreate = t.Object(
  { name: t.String(), expiresAt: t.Optional(__nullable__(t.Date())) },
  { additionalProperties: false },
);

export const genrePlainInputUpdate = t.Object(
  {
    name: t.Optional(t.String()),
    expiresAt: t.Optional(__nullable__(t.Date())),
  },
  { additionalProperties: false },
);

export const genreRelationsInputCreate = t.Object(
  {
    movie: t.Optional(
      t.Object(
        {
          connect: t.Array(
            t.Object(
              {
                id: t.String({ additionalProperties: false }),
              },
              { additionalProperties: false },
            ),
            { additionalProperties: false },
          ),
        },
        { additionalProperties: false },
      ),
    ),
  },
  { additionalProperties: false },
);

export const genreRelationsInputUpdate = t.Partial(
  t.Object(
    {
      movie: t.Partial(
        t.Object(
          {
            connect: t.Array(
              t.Object(
                {
                  id: t.String({ additionalProperties: false }),
                },
                { additionalProperties: false },
              ),
              { additionalProperties: false },
            ),
            disconnect: t.Array(
              t.Object(
                {
                  id: t.String({ additionalProperties: false }),
                },
                { additionalProperties: false },
              ),
              { additionalProperties: false },
            ),
          },
          { additionalProperties: false },
        ),
      ),
    },
    { additionalProperties: false },
  ),
);

export const genreWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.String(),
          name: t.String(),
          createdAt: t.Date(),
          updatedAt: t.Date(),
          expiresAt: t.Date(),
        },
        { additionalProperties: false },
      ),
    { $id: "genre" },
  ),
);

export const genreWhereUnique = t.Recursive(
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
            {
              id: t.String(),
              name: t.String(),
              createdAt: t.Date(),
              updatedAt: t.Date(),
              expiresAt: t.Date(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "genre" },
);

export const genreSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      name: t.Boolean(),
      movie: t.Boolean(),
      createdAt: t.Boolean(),
      updatedAt: t.Boolean(),
      expiresAt: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const genreInclude = t.Partial(
  t.Object(
    { movie: t.Boolean(), _count: t.Boolean() },
    { additionalProperties: false },
  ),
);

export const genreOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      createdAt: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      updatedAt: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      expiresAt: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const genre = t.Composite([genrePlain, genreRelations], {
  additionalProperties: false,
});

export const genreInputCreate = t.Composite(
  [genrePlainInputCreate, genreRelationsInputCreate],
  { additionalProperties: false },
);

export const genreInputUpdate = t.Composite(
  [genrePlainInputUpdate, genreRelationsInputUpdate],
  { additionalProperties: false },
);
