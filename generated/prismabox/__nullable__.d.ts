import { type TSchema } from "elysia";
export declare const __nullable__: <T extends TSchema>(schema: T) => import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNull, T]>;
