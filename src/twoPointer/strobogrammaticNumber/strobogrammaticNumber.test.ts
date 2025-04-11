import { isStrobogrammatic } from "./index";

describe("Strobogrammatic Number", () => {
  test("should correctly identify strobogrammatic numbers", () => {
    expect(isStrobogrammatic("69")).toBe(true);
    expect(isStrobogrammatic("88")).toBe(true);
    expect(isStrobogrammatic("818")).toBe(true);
    expect(isStrobogrammatic("101")).toBe(true);
    expect(isStrobogrammatic("609")).toBe(true);
  });

  test("should correctly reject non-strobogrammatic numbers", () => {
    expect(isStrobogrammatic("12")).toBe(false);
    expect(isStrobogrammatic("123")).toBe(false);
    expect(isStrobogrammatic("1234")).toBe(false);
    expect(isStrobogrammatic("12345")).toBe(false);
    expect(isStrobogrammatic("123456")).toBe(false);
  });

  test("should correctly handle single-digit numbers", () => {
    expect(isStrobogrammatic("0")).toBe(true);
    expect(isStrobogrammatic("1")).toBe(true);
    expect(isStrobogrammatic("8")).toBe(true);
    expect(isStrobogrammatic("2")).toBe(false);
    expect(isStrobogrammatic("3")).toBe(false);
    expect(isStrobogrammatic("4")).toBe(false);
    expect(isStrobogrammatic("5")).toBe(false);
    expect(isStrobogrammatic("6")).toBe(false);
    expect(isStrobogrammatic("7")).toBe(false);
    expect(isStrobogrammatic("9")).toBe(false);
  });

  test("should correctly handle empty string", () => {
    expect(isStrobogrammatic("")).toBe(true);
  });

  test("should correctly handle long strobogrammatic numbers", () => {
    const longStrobogrammatic = "69".repeat(10);
    expect(isStrobogrammatic(longStrobogrammatic)).toBe(true);
  });

  test("should correctly handle numbers with leading zeros", () => {
    expect(isStrobogrammatic("069")).toBe(false);
    expect(isStrobogrammatic("0069")).toBe(false);
  });
});
