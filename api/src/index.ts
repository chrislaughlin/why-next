import { Hono } from "hono";
import { cors } from 'hono/cors'
// @ts-ignore
import data from "./data";

const app = new Hono();

let list: Transformer[] = [];

app.use('/*', cors({
    origin: '*',
    allowMethods: ['GET', 'POST'],
}))

app.get("/", (c) => {
  list = data as Transformer[];
  return c.json(list);
});

app.post("/", async (c) => {
  const body = await c.req.json()
  console.log(body);
  list = [body, ...list];

  return c.json(list);
});

export default app;
