import { isPrefixOfWord } from "./index";

describe("isPrefixOfWord", () => {
  test('should return 4 for sentence "i love eating burger" and search word "burg"', () => {
    expect(isPrefixOfWord("i love eating burger", "burg")).toBe(4);
  });

  test('should return 2 for sentence "this problem is an easy problem" and search word "pro"', () => {
    expect(isPrefixOfWord("this problem is an easy problem", "pro")).toBe(2);
  });

  test('should return -1 for sentence "i am tired" and search word "you"', () => {
    expect(isPrefixOfWord("i am tired", "you")).toBe(-1);
  });

  test('should return 4 for sentence "i use triple pillow" and search word "pill"', () => {
    expect(isPrefixOfWord("i use triple pillow", "pill")).toBe(4);
  });

  test('should return -1 for sentence "hello from the other side" and search word "they"', () => {
    expect(isPrefixOfWord("hello from the other side", "they")).toBe(-1);
  });

  test('should return 1 for sentence "hellohello hellohellohello" and search word "hello"', () => {
    expect(isPrefixOfWord("hellohello hellohellohello", "hello")).toBe(1);
  });

  test('should return 1 for sentence "hellohello hellohellohello" and search word "h"', () => {
    expect(isPrefixOfWord("hellohello hellohellohello", "h")).toBe(1);
  });

  test('should return -1 for sentence "hellohello hellohellohello" and search word "ell"', () => {
    expect(isPrefixOfWord("hellohello hellohellohello", "ell")).toBe(-1);
  });

  test('should return -1 for empty sentence and search word "hello"', () => {
    expect(isPrefixOfWord("", "hello")).toBe(-1);
  });

  test('should return 1 for sentence "hello" and empty search word', () => {
    expect(isPrefixOfWord("hello", "")).toBe(1);
  });

  test('should return 1 for sentence "hello" and search word "hello"', () => {
    expect(isPrefixOfWord("hello", "hello")).toBe(1);
  });

  test('should return -1 for sentence "hello" and search word "hellohello"', () => {
    expect(isPrefixOfWord("hello", "hellohello")).toBe(-1);
  });

  test('should return 1 for sentence "hello world" and search word "hello"', () => {
    expect(isPrefixOfWord("hello world", "hello")).toBe(1);
  });

  test('should return 2 for sentence "hello world" and search word "world"', () => {
    expect(isPrefixOfWord("hello world", "world")).toBe(2);
  });

  test('should return 1 for sentence "hello world" and search word "h"', () => {
    expect(isPrefixOfWord("hello world", "h")).toBe(1);
  });

  test('should return 2 for sentence "hello world" and search word "w"', () => {
    expect(isPrefixOfWord("hello world", "w")).toBe(2);
  });
});
