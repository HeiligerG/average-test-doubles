import { expect } from "@std/expect";
import { Average } from "./average.ts";
import { SpyFileAccess } from "./spy_file_access.ts";

Deno.test("SpyFileAccess tracks readNumbers calls for computeMeanOfFile", async () => {
  const spy = new SpyFileAccess([1, 2, 3, 4, 5]);
  const average = new Average(spy);

  await average.computeMeanOfFile();

  expect(spy.getCallCount()).toBe(1);
});

Deno.test("SpyFileAccess tracks readNumbers calls for computeMedianOfFile", async () => {
  const spy = new SpyFileAccess([1, 3, 2, 5, 4]);
  const average = new Average(spy);

  await average.computeMedianOfFile();

  expect(spy.getCallCount()).toBe(1);
});

Deno.test("SpyFileAccess tracks readNumbers calls for computeModeOfFile", async () => {
  const spy = new SpyFileAccess([1, 2, 2, 3, 3, 3]);
  const average = new Average(spy);

  await average.computeModeOfFile();

  expect(spy.getCallCount()).toBe(1);
});

Deno.test("SpyFileAccess tracks multiple readNumbers calls", async () => {
  const spy = new SpyFileAccess([1, 2, 3]);
  const average = new Average(spy);

  await average.computeMeanOfFile();
  await average.computeMedianOfFile();
  await average.computeModeOfFile();

  expect(spy.getCallCount()).toBe(3);
});

Deno.test("SpyFileAccess resetCallCount works", async () => {
  const spy = new SpyFileAccess([1, 2, 3]);
  const average = new Average(spy);

  await average.computeMeanOfFile();
  await average.computeMedianOfFile();

  expect(spy.getCallCount()).toBe(2);

  spy.resetCallCount();

  expect(spy.getCallCount()).toBe(0);

  await average.computeModeOfFile();

  expect(spy.getCallCount()).toBe(1);
});
