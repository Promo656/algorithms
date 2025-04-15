import { happyNumber } from "./index";

describe("happyNumber", () => {
  test("should return true for happy numbers", () => {
    expect(happyNumber(19)).toBe(true);
    expect(happyNumber(7)).toBe(true);
    expect(happyNumber(1)).toBe(true);
    expect(happyNumber(100)).toBe(true);
    expect(happyNumber(130)).toBe(true);
    expect(happyNumber(1000)).toBe(true);
  });

  test("should return false for unhappy numbers", () => {
    expect(happyNumber(2)).toBe(false);
    expect(happyNumber(4)).toBe(false);
    expect(happyNumber(20)).toBe(false);
    expect(happyNumber(999)).toBe(false);
    expect(happyNumber(987)).toBe(false);
    expect(happyNumber(9999)).toBe(false);
  });

  test("should handle edge cases", () => {
    expect(happyNumber(0)).toBe(false);
    expect(happyNumber(-1)).toBe(false);
  });
});
