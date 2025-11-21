export interface NumberProvider {
  readNumbers(): Promise<number[]>;
}
