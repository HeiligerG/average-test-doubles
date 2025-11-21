import { expect } from "@std/expect";
import { Average } from "./average.ts";
import { FakeFileAccess } from "./fake_file_access.ts";

Deno.test("Average computeMeanOfFile with FakeFileAccess", async () => {
  // Arrange
  const fakeFileAccess = new FakeFileAccess();
  fakeFileAccess.addFile("/test/file1.txt", [1, 2, 3, 4, 5]);
  const average = new Average(fakeFileAccess);

  // Act
  const result = await average.computeMeanOfFile();

  // Assert
  expect(result).toBe(3); // (1+2+3+4+5)/5 = 3
});

Deno.test("Average computeMeanOfFile with empty file using FakeFileAccess", async () => {
  // Arrange
  const fakeFileAccess = new FakeFileAccess();
  fakeFileAccess.addFile("/empty/file.txt", []);
  const average = new Average(fakeFileAccess);

  // Act
  const result = await average.computeMeanOfFile();

  // Assert
  expect(result).toBe(NaN); // Mean of empty array is NaN
});

Deno.test("Average computeMedianOfFile with FakeFileAccess", async () => {
  // Arrange
  const fakeFileAccess = new FakeFileAccess();
  fakeFileAccess.addFile("/test/file2.txt", [1, 3, 2, 5, 4]);
  const average = new Average(fakeFileAccess);

  // Act
  const result = await average.computeMedianOfFile();

  // Assert
  expect(result).toBe(3); // Sorted: [1,2,3,4,5] -> median = 3
});

Deno.test("Average computeModeOfFile with FakeFileAccess", async () => {
  // Arrange
  const fakeFileAccess = new FakeFileAccess();
  fakeFileAccess.addFile("/test/file3.txt", [1, 2, 2, 3, 3, 3, 4]);
  const average = new Average(fakeFileAccess);

  // Act
  const result = await average.computeModeOfFile();

  // Assert
  expect(result).toEqual([3]); // Mode is [3] since 3 appears most frequently
});
