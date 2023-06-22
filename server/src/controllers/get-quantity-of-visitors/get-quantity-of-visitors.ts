import { GetQuantityOfVisitorsUseCase } from "../../usecases/get-quantity-of-visitors";

export class GetQuantityOfVisitorsController {
  constructor(
    private readonly getQuantityOfVisitorsUseCase: GetQuantityOfVisitorsUseCase
  ) {}

  handle = async () => {
    try {
      const quantityOfVisitors =
        await this.getQuantityOfVisitorsUseCase.execute();

      return { quantityOfVisitors: quantityOfVisitors };
    } catch (error) {
      return { error };
    }
  };
}
