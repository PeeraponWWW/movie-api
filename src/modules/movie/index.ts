import Elysia, { t } from "elysia";
import { MovieService } from "./service";
import { moviePlain, moviePlainInputCreate, moviePlainInputUpdate } from "../../../generated/prismabox/movie";

export const movie = new Elysia({ prefix: "/movie"})
    .get(
        "/",
        async () => {
            return await MovieService.getAll();
        },
        {
            response: {
                200: t.Array(moviePlain)
            }
        }
    )
    .post(
        "/",
        async ({ body }) => {
            return await MovieService.create(body);
        },
        {
            body: t.Array(moviePlainInputCreate),
            response: {
                200: t.Array(moviePlain)
            }
        }
    )
    .put(
        "/:id",
        async ({ params, body }) => {
            return await MovieService.update(params.id, body);
        },
        {
            params: t.Object({
                id: t.String()
            }),
            body: moviePlainInputUpdate,
            response: {
                200: moviePlain
            }
        }
    )
    .delete(
        "/:id",
        async ({ params }) => {
            return await MovieService.delete(params.id);
        },
        {
            params: t.Object({
                id: t.String()
            }),
            response: {
                200: moviePlain
            }
        }
    )