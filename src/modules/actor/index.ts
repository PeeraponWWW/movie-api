import Elysia, { t } from "elysia";
import { ActorService } from "./service";
import { actorPlain, actorPlainInputCreate, actorPlainInputUpdate } from "../../../generated/prismabox/actor";

export const actor = new Elysia({ prefix: "/actor"})
    .get(
        "/",
        async () => {
            return await ActorService.getAll();
        },
        {
            response: {
                200: t.Array(actorPlain)
            }
        }

    )
    .post(
        "/",
        async ({ body }) => {
            return await ActorService.create(body);
        },
        {
            body: t.Array(actorPlainInputCreate),
            response: {
                200: t.Array(actorPlain)
            }
        }
    )
    .put(
        "/:id",
        async ({ params, body }) => {
            return await ActorService.update(params.id, body);
        },
        {
            params: t.Object({
                id: t.String()
            }),
            body: actorPlainInputUpdate,
            response: {
                200: actorPlain
            }
        }
    )
    .delete(
        "/:id",
        async ({ params }) => {
            return await ActorService.delete(params.id);
        },
        {
            params: t.Object({
                id: t.String()
            }),
            response: {
                200: actorPlain
            }
        }
    )