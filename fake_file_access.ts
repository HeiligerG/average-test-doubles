// This file was created with AI assistance because i didn't understand it enough to 
// write it myself. I will understand all and make the spy example whith out AI.

import { NumberProvider } from "./number_provider.ts";

export class FakeFileAccess implements NumberProvider {
  private files: Map<string, number[]> = new Map();

  public addFile(path: string, numbers: number[]): void {
    this.files.set(path, numbers);
  }

  public async readNumbers(): Promise<number[]> {
    // For a Fake implementation, we need to simulate the file path behavior
    // Since FakeFileAccess doesn't have a path in constructor like FileAccess,
    // we'll use a simple approach - return the first file's data or empty array
    // In a real test, you would set up specific test data
    if (this.files.size === 0) {
      return [];
    }
    // Return the first file's data as a simple implementation
    return Array.from(this.files.values())[0];
  }

  // Alternative implementation that takes a path parameter
  public async readNumbersFromPath(path: string): Promise<number[]> {
    return this.files.get(path) || [];
  }
}
