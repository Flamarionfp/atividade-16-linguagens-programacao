export interface VisitorRepository {
  getCount(): Promise<number>;
  updateCount(): Promise<void>;
}
