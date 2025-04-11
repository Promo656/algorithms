import { isPalindrome } from './index';

describe('Palindrome', () => {
  test('should correctly identify palindromes', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
    expect(isPalindrome('race a car')).toBe(false);
    expect(isPalindrome('Was it a car or a cat I saw?')).toBe(true);
    expect(isPalindrome('No lemon, no melon')).toBe(true);
  });

  test('should correctly handle empty strings', () => {
    expect(isPalindrome('')).toBe(true);
    expect(isPalindrome('   ')).toBe(true);
  });

  test('should correctly handle single-letter strings', () => {
    expect(isPalindrome('a')).toBe(true);
    expect(isPalindrome('A')).toBe(true);
  });

  test('should ignore letter case', () => {
    expect(isPalindrome('Aa')).toBe(true);
    expect(isPalindrome('Ab')).toBe(false);
  });

  test('should ignore special characters and spaces', () => {
    expect(isPalindrome('.,')).toBe(true);
    expect(isPalindrome('a.')).toBe(true);
    expect(isPalindrome('ab,')).toBe(false);
  });

  test('should correctly handle numbers', () => {
    expect(isPalindrome('12321')).toBe(true);
    expect(isPalindrome('12345')).toBe(false);
    expect(isPalindrome('1a1')).toBe(true);
  });

  test('should correctly handle long strings', () => {
    const longPalindrome = 'A'.repeat(1000) + 'B' + 'A'.repeat(1000);
    expect(isPalindrome(longPalindrome)).toBe(true);
    
    const longNonPalindrome = 'A'.repeat(1000) + 'B' + 'C' + 'A'.repeat(1000);
    expect(isPalindrome(longNonPalindrome)).toBe(false);
  });
});
