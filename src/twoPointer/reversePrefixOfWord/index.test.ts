import { reversePrefix } from './index';

describe('reversePrefix', () => {
    test('should return "dcbaefd" for word = "abcdefd" and ch = "d"', () => {
        expect(reversePrefix('abcdefd', 'd')).toBe('dcbaefd');
    });

    test('should return "zxyxxe" for word = "xyxzxe" and ch = "z"', () => {
        expect(reversePrefix('xyxzxe', 'z')).toBe('zxyxxe');
    });

    test('should return "abcd" for word = "abcd" and ch = "z"', () => {
        expect(reversePrefix('abcd', 'z')).toBe('abcd');
    });

    test('should return "a" for word = "a" and ch = "a"', () => {
        expect(reversePrefix('a', 'a')).toBe('a');
    });

    test('should return "a" for word = "a" and ch = "b"', () => {
        expect(reversePrefix('a', 'b')).toBe('a');
    });

    test('should return "ba" for word = "ab" and ch = "b"', () => {
        expect(reversePrefix('ab', 'b')).toBe('ba');
    });

    test('should return "cba" for word = "abc" and ch = "c"', () => {
        expect(reversePrefix('abc', 'c')).toBe('cba');
    });

    test('should return "abc" for word = "abc" and ch = "a"', () => {
        expect(reversePrefix('abc', 'a')).toBe('abc');
    });

    test('should return "dcba" for word = "abcd" and ch = "d"', () => {
        expect(reversePrefix('abcd', 'd')).toBe('dcba');
    });

    test('should return "edcba" for word = "abcde" and ch = "e"', () => {
        expect(reversePrefix('abcde', 'e')).toBe('edcba');
    });

    test('should return "fedcba" for word = "abcdef" and ch = "f"', () => {
        expect(reversePrefix('abcdef', 'f')).toBe('fedcba');
    });

    test('should return "abcdef" for word = "abcdef" and ch = "a"', () => {
        expect(reversePrefix('abcdef', 'a')).toBe('abcdef');
    });

    test('should return "cbadef" for word = "abcdef" and ch = "c"', () => {
        expect(reversePrefix('abcdef', 'c')).toBe('cbadef');
    });

    test('should return "dcbaef" for word = "abcdef" and ch = "d"', () => {
        expect(reversePrefix('abcdef', 'd')).toBe('dcbaef');
    });

    test('should return "edcbaf" for word = "abcdef" and ch = "e"', () => {
        expect(reversePrefix('abcdef', 'e')).toBe('edcbaf');
    });

    test('should return "fedcba" for word = "abcdef" and ch = "f"', () => {
        expect(reversePrefix('abcdef', 'f')).toBe('fedcba');
    });

    test('should return "abcdef" for word = "abcdef" and ch = "g"', () => {
        expect(reversePrefix('abcdef', 'g')).toBe('abcdef');
    });

    test('should return "" for word = "" and ch = "a"', () => {
        expect(reversePrefix('', 'a')).toBe('');
    });

    test('should return "aaa" for word = "aaa" and ch = "a"', () => {
        expect(reversePrefix('aaa', 'a')).toBe('aaa');
    });

    test('should return "baa" for word = "aaa" and ch = "b"', () => {
        expect(reversePrefix('aaa', 'b')).toBe('aaa');
    });
}); 