import { TextVisitorsProvider } from "../../providers/text-visitors";
import { UpdateQuantityOfVisitorsUseCase } from "../../usecases/update-quantity-of-visitors";
import { UpdateQuantityOfVisitorsController } from "./update-quantity-of-visitors";

const textVisitorsProvider = new TextVisitorsProvider();
const updateQuantityOfVisitorsUseCase = new UpdateQuantityOfVisitorsUseCase(
  textVisitorsProvider
);
const updateQuantityOfVisitorsController =
  new UpdateQuantityOfVisitorsController(updateQuantityOfVisitorsUseCase);

export { updateQuantityOfVisitorsController };
