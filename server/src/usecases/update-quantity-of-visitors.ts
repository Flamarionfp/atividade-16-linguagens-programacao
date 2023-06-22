import { VisitorRepository } from "../repositories/visitor";

export class UpdateQuantityOfVisitorsUseCase {
  constructor(private readonly visitorRepository: VisitorRepository) {}

  execute = async (): Promise<void> => {
    await this.visitorRepository.updateCount();
  };
}
