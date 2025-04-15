import { countPairs } from "./index";

describe("countPairs", () => {
  test("should return correct count for simple case", () => {
    const nums = [-1, 1, 2, 3, 1];
    const target = 2;
    expect(countPairs(nums, target)).toBe(3);
  });

  test("should return correct count for array with negative numbers", () => {
    const nums = [-6, 2, 5, -2, -7, -1, 3];
    const target = -2;
    expect(countPairs(nums, target)).toBe(10);
  });

  test("should return 0 for empty array", () => {
    const nums: number[] = [];
    const target = 5;
    expect(countPairs(nums, target)).toBe(0);
  });

  test("should return 0 for array with one element", () => {
    const nums = [1];
    const target = 5;
    expect(countPairs(nums, target)).toBe(0);
  });

  test("should return correct count for array with all positive numbers", () => {
    const nums = [1, 2, 3, 4, 5];
    const target = 8;
    expect(countPairs(nums, target)).toBe(8);
  });

  test("should return correct count for array with duplicate numbers", () => {
    const nums = [1, 1, 1, 1, 1];
    const target = 3;
    expect(countPairs(nums, target)).toBe(10);
  });

  test("should return correct count for large array", () => {
    const nums = Array.from({ length: 100 }, (_, i) => i - 50);
    const target = 0;
    expect(countPairs(nums, target)).toBeGreaterThan(0);
  });
});
