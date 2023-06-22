import { TextVisitorsProvider } from "../../providers/text-visitors";
import { GetQuantityOfVisitorsUseCase } from "../../usecases/get-quantity-of-visitors";
import { GetQuantityOfVisitorsController } from "./get-quantity-of-visitors";

const textVisitorsProvider = new TextVisitorsProvider();
const getQuantityOfVisitorsUseCase = new GetQuantityOfVisitorsUseCase(
  textVisitorsProvider
);
const getQuantityOfVisitorsController = new GetQuantityOfVisitorsController(
  getQuantityOfVisitorsUseCase
);

export { getQuantityOfVisitorsController };
