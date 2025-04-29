import { isPrefixString } from "./index";

describe("isPrefixString", () => {
  test('should return true for s = "iloveleetcode" and words = ["i","love","leetcode","apples"]', () => {
    expect(
      isPrefixString("iloveleetcode", ["i", "love", "leetcode", "apples"])
    ).toBe(true);
  });

  test('should return false for s = "iloveleetcode" and words = ["apples","i","love","leetcode"]', () => {
    expect(
      isPrefixString("iloveleetcode", ["apples", "i", "love", "leetcode"])
    ).toBe(false);
  });

  test('should return true for s = "a" and words = ["a"]', () => {
    expect(isPrefixString("a", ["a"])).toBe(true);
  });

  test('should return false for s = "a" and words = ["b"]', () => {
    expect(isPrefixString("a", ["b"])).toBe(false);
  });

  test('should return true for s = "abc" and words = ["a","b","c"]', () => {
    expect(isPrefixString("abc", ["a", "b", "c"])).toBe(true);
  });

  test('should return false for s = "abc" and words = ["a","b","d"]', () => {
    expect(isPrefixString("abc", ["a", "b", "d"])).toBe(false);
  });

  test('should return false for s = "abc" and words = ["a","b"]', () => {
    expect(isPrefixString("abc", ["a", "b"])).toBe(false);
  });

  test('should return true for s = "abc" and words = ["a","b","c","d"]', () => {
    expect(isPrefixString("abc", ["a", "b", "c", "d"])).toBe(true);
  });

  test('should return true for s = "hello" and words = ["h","e","l","l","o"]', () => {
    expect(isPrefixString("hello", ["h", "e", "l", "l", "o"])).toBe(true);
  });

  test('should return false for s = "hello" and words = ["h","e","l","o"]', () => {
    expect(isPrefixString("hello", ["h", "e", "l", "o"])).toBe(false);
  });

  test('should return true for s = "" and words = []', () => {
    expect(isPrefixString("", [])).toBe(false);
  });

  test('should return true for s = "a" and words = ["a","b","c"]', () => {
    expect(isPrefixString("a", ["a", "b", "c"])).toBe(true);
  });

  test('should return false for s = "ab" and words = ["a"]', () => {
    expect(isPrefixString("ab", ["a"])).toBe(false);
  });

  test('should return true for s = "abc" and words = ["ab","c"]', () => {
    expect(isPrefixString("abc", ["ab", "c"])).toBe(true);
  });

  test('should return true for s = "abc" and words = ["a","bc"]', () => {
    expect(isPrefixString("abc", ["a", "bc"])).toBe(true);
  });
});
