import { Hono } from "hono";
import { handle } from "hono/vercel";

import users from "./users";
import posts from "./posts";

export const runtime = "edge";

const app = new Hono().basePath("/api");

// app.get("/hello", (c) => {
//   return c.json({
//     message: "Hello Next.js!!",
//   });
// });

const routes = app.route("/users", users).route("/posts", posts);

export type AppType = typeof routes;

export const GET = handle(app);
export const POST = handle(app);
