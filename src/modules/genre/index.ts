import Elysia, { t } from "elysia";
import { GenreService } from "./service";
import { genrePlain, genrePlainInputUpdate } from "../../../generated/prismabox/genre";

export const genre = new Elysia({ prefix: "/genre"})
    .get(
        "/",
        async () => {
            return await GenreService.getAll();
        },
        {
            response: {
                200: t.Array(genrePlain)
            }
        }
    )
    .post(
        "/",
        async ({ body }) => {
            return await GenreService.create(body);
        },
        {
            body: t.Array(genrePlain),
            response: {
                200: t.Array(genrePlain)
            }
        }
    )
    .put(
        "/:id",
        async ({ params, body }) => {
            return await GenreService.update(params.id, body);
        },
        {
            params: t.Object({
                id: t.String()
            }),
            body: genrePlainInputUpdate,
            response: {
                200: genrePlain
            }
        }
    )
    .delete(
        "/:id",
        async ({ params }) => {
            return await GenreService.delete(params.id);
        },
        {
            params: t.Object({
                id: t.String()
            }),
            response: {
                200: genrePlain
            }
        }
    )