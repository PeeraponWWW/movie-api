import { Elysia } from "elysia";
import { actor } from "./modules/actor";
import { movie } from "./modules/movie";
import { genre } from "./modules/genre";
import openapi, { fromTypes } from "@elysia/openapi";

const app = new Elysia()
  .use(
    openapi({
      references: fromTypes('src/index.ts')
    })
  )
  .use(actor)
  .use(genre)
  .use(movie)
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
