import fastify from "fastify";
import { visitorsRoutes } from "./routes/visitors";
import cors from "@fastify/cors";

const app = fastify();

app.register(cors, {
  origin: "http://localhost:3000",
  methods: ["GET", "PATCH"],
});

app.register(visitorsRoutes);

const port = Number(process.env.PORT) || 3333;

app
  .listen({
    port,
  })
  .then(() => {
    console.log(`🚀 Server is running on port ${port}`);
  });
