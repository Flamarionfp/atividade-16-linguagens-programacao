import { VisitorRepository } from "../repositories/visitor";

export class GetQuantityOfVisitorsUseCase {
  constructor(private readonly visitorRepository: VisitorRepository) {}

  execute = async (): Promise<number> => {
    const quantityOfVisitors = await this.visitorRepository.getCount();

    return quantityOfVisitors;
  };
}
