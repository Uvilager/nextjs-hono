import { db } from "@/database/db";
import { postsTable } from "@/database/schema";
import { Hono } from "hono";

const app = new Hono().get("/", (c) => {
  return c.json({ message: "posts" });
});

// posts.get("/", async (c) => {
//   const posts = await db.select().from(postsTable);
//   return c.json({ posts });
// });

export default app;
