import { sortColors } from './index';

describe('Sort Colors (Dutch National Flag)', () => {
  test('should correctly sort array with three colors', () => {
    const nums = [2, 0, 2, 1, 1, 0];
    sortColors(nums);
    expect(nums).toEqual([0, 0, 1, 1, 2, 2]);
  });

  test('should correctly handle array with one color', () => {
    const nums = [0, 0, 0];
    sortColors(nums);
    expect(nums).toEqual([0, 0, 0]);
    
    const nums2 = [1, 1, 1];
    sortColors(nums2);
    expect(nums2).toEqual([1, 1, 1]);
    
    const nums3 = [2, 2, 2];
    sortColors(nums3);
    expect(nums3).toEqual([2, 2, 2]);
  });

  test('should correctly handle array with two colors', () => {
    const nums = [1, 0, 1, 0];
    sortColors(nums);
    expect(nums).toEqual([0, 0, 1, 1]);
    
    const nums2 = [2, 0, 2, 0];
    sortColors(nums2);
    expect(nums2).toEqual([0, 0, 2, 2]);
    
    const nums3 = [2, 1, 2, 1];
    sortColors(nums3);
    expect(nums3).toEqual([1, 1, 2, 2]);
  });

  test('should correctly handle empty array', () => {
    const nums: number[] = [];
    sortColors(nums);
    expect(nums).toEqual([]);
  });

  test('should correctly handle array with one element', () => {
    const nums = [0];
    sortColors(nums);
    expect(nums).toEqual([0]);
    
    const nums2 = [1];
    sortColors(nums2);
    expect(nums2).toEqual([1]);
    
    const nums3 = [2];
    sortColors(nums3);
    expect(nums3).toEqual([2]);
  });

  test('should correctly handle array with alternating colors', () => {
    const nums = [0, 1, 2, 0, 1, 2];
    sortColors(nums);
    expect(nums).toEqual([0, 0, 1, 1, 2, 2]);
  });

  test('should correctly handle long arrays', () => {
    const nums = Array(100).fill(0).map(() => Math.floor(Math.random() * 3));
    const sorted = [...nums].sort((a, b) => a - b);
    sortColors(nums);
    expect(nums).toEqual(sorted);
  });
}); 