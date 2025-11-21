import { NumberProvider } from "./number_provider.ts";

export class SpyFileAccess implements NumberProvider {
  private callCount = 0;
  private numbers: number[];

  constructor(numbers: number[]) {
    this.numbers = numbers;
  }

  public async readNumbers(): Promise<number[]> {
    this.callCount++;
    return this.numbers;
  }

  public getCallCount(): number {
    return this.callCount;
  }

  public resetCallCount(): void {
    this.callCount = 0;
  }
}
