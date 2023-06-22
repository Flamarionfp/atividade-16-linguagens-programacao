import { FastifyInstance } from "fastify";
import { gettQuantityOfVisitorsController } from "../controllers/get-quantity-of-visitors";

export async function visitorsRoutes(app: FastifyInstance) {
  app.get("/visitors", gettQuantityOfVisitorsController.handle);
}
