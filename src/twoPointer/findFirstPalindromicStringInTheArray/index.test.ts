import { firstPalindrome } from "./index";

describe("firstPalindrome", () => {
  test("should return the first palindrome from the array", () => {
    const words = ["abc", "car", "ada", "racecar", "cool"];
    expect(firstPalindrome(words)).toBe("ada");
  });

  test("should return empty string if no palindromes found", () => {
    const words = ["notapalindrome", "raceacar"];
    expect(firstPalindrome(words)).toBe("");
  });

  test("should return the first palindrome from array with single word", () => {
    const words = ["level"];
    expect(firstPalindrome(words)).toBe("level");
  });

  test("should return empty string for empty array", () => {
    const words: string[] = [];
    expect(firstPalindrome(words)).toBe("");
  });

  test("should return the first palindrome from array with identical palindromes", () => {
    const words = ["madam", "madam", "madam"];
    expect(firstPalindrome(words)).toBe("madam");
  });

  test("should return the first palindrome from array with different word lengths", () => {
    const words = ["a", "bb", "ccc", "dddd", "eeeee"];
    expect(firstPalindrome(words)).toBe("a");
  });

  test("should return the first palindrome from array with different cases", () => {
    const words = ["Hello", "RADAR", "World"];
    expect(firstPalindrome(words)).toBe("RADAR");
  });

  test("should return the first palindrome from array with numbers in strings", () => {
    const words = ["12321", "hello", "45654"];
    expect(firstPalindrome(words)).toBe("12321");
  });

  test("should return the first palindrome from array with special characters", () => {
    const words = ["a!a", "b@b", "c#c"];
    expect(firstPalindrome(words)).toBe("a!a");
  });

  test("should return the first palindrome from array with repeated characters", () => {
    const words = ["aaa", "bbb", "ccc"];
    expect(firstPalindrome(words)).toBe("aaa");
  });

  test("should return the first palindrome from array with leading and trailing spaces", () => {
    const words = ["  radar  ", "hello", "  level  "];
    expect(firstPalindrome(words)).toBe("  radar  ");
  });
});
