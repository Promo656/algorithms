import { isValidAbbreviation } from "./index";

describe("Valid Word Abbreviation", () => {
  test("should accept valid abbreviations", () => {
    expect(isValidAbbreviation("internationalization", "i12iz4n")).toBe(true);
    expect(isValidAbbreviation("internationalization", "i5a11o1")).toBe(true);
    expect(isValidAbbreviation("apple", "a3e")).toBe(true);
    expect(isValidAbbreviation("substitution", "s10n")).toBe(true);
    expect(isValidAbbreviation("substitution", "sub4u4")).toBe(true);
  });

  test("should reject invalid abbreviations", () => {
    expect(isValidAbbreviation("apple", "a2e")).toBe(false);
    expect(isValidAbbreviation("substitution", "s55n")).toBe(false);
    expect(isValidAbbreviation("substitution", "s010n")).toBe(false);
  });

  test("should correctly handle single-letter words", () => {
    expect(isValidAbbreviation("a", "1")).toBe(true);
    expect(isValidAbbreviation("a", "2")).toBe(false);
  });

  test("should correctly handle empty strings", () => {
    expect(isValidAbbreviation("", "")).toBe(true);
    expect(isValidAbbreviation("word", "")).toBe(false);
    expect(isValidAbbreviation("", "1")).toBe(false);
  });

  test("should correctly handle digits at the beginning of abbreviation", () => {
    expect(isValidAbbreviation("word", "4")).toBe(true);
    expect(isValidAbbreviation("word", "5")).toBe(false);
  });

  test("should correctly handle consecutive digits", () => {
    expect(isValidAbbreviation("word", "w1r1")).toBe(true);
    expect(isValidAbbreviation("word", "w2r1")).toBe(false);
  });

  test("should correctly handle zeros in abbreviation", () => {
    expect(isValidAbbreviation("word", "w0rd")).toBe(false);
    expect(isValidAbbreviation("word", "w01rd")).toBe(false);
  });
});
