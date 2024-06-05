import { db } from "@/database/db";
import { usersTable } from "@/database/schema";
import { Hono } from "hono";

const app = new Hono().get("/", async (c) => {
  const users = await db.select().from(usersTable);
  return c.json(users);
});

export default app;
