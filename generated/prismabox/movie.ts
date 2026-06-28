import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const moviePlain = t.Object(
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
);

export const movieRelations = t.Object(
  {
    genres: t.Array(
      t.Object(
        { id: t.String(), movie_id: t.String(), genre_id: t.String() },
        { additionalProperties: false },
      ),
      { additionalProperties: false },
    ),
    actors: t.Array(
      t.Object(
        { id: t.String(), movie_id: t.String(), actor_id: t.String() },
        { additionalProperties: false },
      ),
      { additionalProperties: false },
    ),
  },
  { additionalProperties: false },
);

export const moviePlainInputCreate = t.Object(
  {
    title: t.String(),
    synopsis: t.String(),
    duration: t.Optional(t.Integer()),
    releaseDate: t.Date(),
    expiresAt: t.Optional(__nullable__(t.Date())),
  },
  { additionalProperties: false },
);

export const moviePlainInputUpdate = t.Object(
  {
    title: t.Optional(t.String()),
    synopsis: t.Optional(t.String()),
    duration: t.Optional(t.Integer()),
    releaseDate: t.Optional(t.Date()),
    expiresAt: t.Optional(__nullable__(t.Date())),
  },
  { additionalProperties: false },
);

export const movieRelationsInputCreate = t.Object(
  {
    genres: t.Optional(
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
    actors: t.Optional(
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

export const movieRelationsInputUpdate = t.Partial(
  t.Object(
    {
      genres: t.Partial(
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
      actors: t.Partial(
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

export const movieWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.String(),
          title: t.String(),
          synopsis: t.String(),
          duration: t.Integer(),
          releaseDate: t.Date(),
          createdAt: t.Date(),
          updatedAt: t.Date(),
          expiresAt: t.Date(),
        },
        { additionalProperties: false },
      ),
    { $id: "movie" },
  ),
);

export const movieWhereUnique = t.Recursive(
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
              title: t.String(),
              synopsis: t.String(),
              duration: t.Integer(),
              releaseDate: t.Date(),
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
  { $id: "movie" },
);

export const movieSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      title: t.Boolean(),
      synopsis: t.Boolean(),
      duration: t.Boolean(),
      releaseDate: t.Boolean(),
      genres: t.Boolean(),
      actors: t.Boolean(),
      createdAt: t.Boolean(),
      updatedAt: t.Boolean(),
      expiresAt: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const movieInclude = t.Partial(
  t.Object(
    { genres: t.Boolean(), actors: t.Boolean(), _count: t.Boolean() },
    { additionalProperties: false },
  ),
);

export const movieOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      title: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      synopsis: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      duration: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      releaseDate: t.Union([t.Literal("asc"), t.Literal("desc")], {
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

export const movie = t.Composite([moviePlain, movieRelations], {
  additionalProperties: false,
});

export const movieInputCreate = t.Composite(
  [moviePlainInputCreate, movieRelationsInputCreate],
  { additionalProperties: false },
);

export const movieInputUpdate = t.Composite(
  [moviePlainInputUpdate, movieRelationsInputUpdate],
  { additionalProperties: false },
);
