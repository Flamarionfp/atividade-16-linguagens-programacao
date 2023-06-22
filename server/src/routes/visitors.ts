import { FastifyInstance } from "fastify";
import { getQuantityOfVisitorsController } from "../controllers/get-quantity-of-visitors";
import { updateQuantityOfVisitorsController } from "../controllers/update-quantity-of-visitors";

export async function visitorsRoutes(app: FastifyInstance) {
  app.get("/visitors", getQuantityOfVisitorsController.handle);
  app.patch("/visitors", updateQuantityOfVisitorsController.handle);
}
