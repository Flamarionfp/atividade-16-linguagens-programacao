import { GetQuantityOfVisitorsUseCase } from "../../usecases/get-quantity-of-visitors";
import { UpdateQuantityOfVisitorsUseCase } from "../../usecases/update-quantity-of-visitors";

export class UpdateQuantityOfVisitorsController {
  constructor(
    private readonly updateQuantityOfVisitorsUseCase: UpdateQuantityOfVisitorsUseCase
  ) {}

  handle = async () => {
    try {
      await this.updateQuantityOfVisitorsUseCase.execute();
      return;
    } catch (error) {
      return { error };
    }
  };
}
