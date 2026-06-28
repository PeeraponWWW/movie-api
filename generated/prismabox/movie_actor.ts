import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const movie_actorPlain = t.Object(
  { id: t.String(), movie_id: t.String(), actor_id: t.String() },
  { additionalProperties: false },
);

export const movie_actorRelations = t.Object(
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
    actor: t.Object(
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

export const movie_actorPlainInputCreate = t.Object(
  {},
  { additionalProperties: false },
);

export const movie_actorPlainInputUpdate = t.Object(
  {},
  { additionalProperties: false },
);

export const movie_actorRelationsInputCreate = t.Object(
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
    actor: t.Object(
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

export const movie_actorRelationsInputUpdate = t.Partial(
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
      actor: t.Object(
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

export const movie_actorWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.String(),
          movie_id: t.String(),
          actor_id: t.String(),
        },
        { additionalProperties: false },
      ),
    { $id: "movie_actor" },
  ),
);

export const movie_actorWhereUnique = t.Recursive(
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
            { id: t.String(), movie_id: t.String(), actor_id: t.String() },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "movie_actor" },
);

export const movie_actorSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      movie_id: t.Boolean(),
      actor_id: t.Boolean(),
      movie: t.Boolean(),
      actor: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const movie_actorInclude = t.Partial(
  t.Object(
    { movie: t.Boolean(), actor: t.Boolean(), _count: t.Boolean() },
    { additionalProperties: false },
  ),
);

export const movie_actorOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      movie_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      actor_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const movie_actor = t.Composite(
  [movie_actorPlain, movie_actorRelations],
  { additionalProperties: false },
);

export const movie_actorInputCreate = t.Composite(
  [movie_actorPlainInputCreate, movie_actorRelationsInputCreate],
  { additionalProperties: false },
);

export const movie_actorInputUpdate = t.Composite(
  [movie_actorPlainInputUpdate, movie_actorRelationsInputUpdate],
  { additionalProperties: false },
);
