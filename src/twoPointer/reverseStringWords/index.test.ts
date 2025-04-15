import { reverseWords } from "./index";

describe("Reverse Words in a String", () => {
  test("should correctly reverse words in a string", () => {
    expect(reverseWords("the sky is blue")).toBe("blue is sky the");
    expect(reverseWords("  hello world  ")).toBe("world hello");
    expect(reverseWords("a good   example")).toBe("example good a");
  });

  test("should correctly handle empty strings", () => {
    expect(reverseWords("")).toBe("");
    expect(reverseWords("   ")).toBe("");
  });

  test("should correctly handle strings with one word", () => {
    expect(reverseWords("hello")).toBe("hello");
    expect(reverseWords("  hello  ")).toBe("hello");
  });

  test("should correctly handle strings with multiple spaces", () => {
    expect(reverseWords("a   b    c")).toBe("c b a");
    expect(reverseWords("    a    b    c    ")).toBe("c b a");
  });

  test("should correctly handle strings with different types of whitespace characters", () => {
    expect(reverseWords("a\tb\nc")).toBe("c b a");
    expect(reverseWords("a\r\nb\tc")).toBe("c b a");
  });

  test("should correctly handle long strings", () => {
    const longString = "word ".repeat(100).trim();
    const reversedLongString = longString.split(" ").reverse().join(" ");
    expect(reverseWords(longString)).toBe(reversedLongString);
  });
});
