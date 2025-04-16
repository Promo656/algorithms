import { findDuplicate } from './index';

describe('findDuplicate', () => {
  test('should find duplicate in array [1,3,4,2,2]', () => {
    expect(findDuplicate([1, 3, 4, 2, 2])).toBe(2);
  });

  test('should find duplicate in array [3,1,3,4,2]', () => {
    expect(findDuplicate([3, 1, 3, 4, 2])).toBe(3);
  });

  test('should find duplicate in array [1,1]', () => {
    expect(findDuplicate([1, 1])).toBe(1);
  });

  test('should find duplicate in array [1,1,2]', () => {
    expect(findDuplicate([1, 1, 2])).toBe(1);
  });

  test('should find duplicate in array [2,2,2,2]', () => {
    expect(findDuplicate([2, 2, 2, 2])).toBe(2);
  });

  test('should find duplicate in array [1,4,4,2,4]', () => {
    expect(findDuplicate([1, 4, 4, 2, 4])).toBe(4);
  });
}); 