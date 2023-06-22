import fastify from "fastify";
import { visitorsRoutes } from "./routes/visitors";

const app = fastify();

app.register(visitorsRoutes);

const port = Number(process.env.PORT) || 3333;

app
  .listen({
    port,
  })
  .then(() => {
    console.log(`🚀 Server is running on port ${port}`);
  });
