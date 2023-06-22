import { VisitorRepository } from "../repositories/visitor";
import fs from "fs";

export class TextVisitorsProvider implements VisitorRepository {
  private filePath: string = "src/files/vistors.txt";

  getCount = async (): Promise<number> => {
    const data = fs.readFileSync(this.filePath, "utf8");
    const formattedData = parseInt(data, 10) || 0;

    return Promise.resolve(formattedData);
  };

  updateCount = async (): Promise<void> => {
    const currentQuantityOfVisitors = await this.getCount();
    const updatedData = currentQuantityOfVisitors + 1;

    fs.writeFileSync(this.filePath, updatedData.toString());
  };
}
