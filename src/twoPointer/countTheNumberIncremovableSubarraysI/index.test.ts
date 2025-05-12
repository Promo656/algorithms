import { countIncremovableSubarrays } from './index';

describe('countIncremovableSubarrays', () => {
    test('should return 10 for [1,2,3,4]', () => {
        const nums = [1, 2, 3, 4];
        expect(countIncremovableSubarrays(nums)).toBe(10);
    });

    test('should return 7 for [6,5,7,8]', () => {
        const nums = [6, 5, 7, 8];
        expect(countIncremovableSubarrays(nums)).toBe(7);
    });

    test('should return 3 for [8,7,6,6]', () => {
        const nums = [8, 7, 6, 6];
        expect(countIncremovableSubarrays(nums)).toBe(3);
    });

    test('should return 1 for [1,1]', () => {
        const nums = [1, 1];
        expect(countIncremovableSubarrays(nums)).toBe(1);
    });

    test('should return 0 for [1,2,3]', () => {
        const nums = [1, 2, 3];
        expect(countIncremovableSubarrays(nums)).toBe(0);
    });

    test('should return 1 for [1,2,3,2]', () => {
        const nums = [1, 2, 3, 2];
        expect(countIncremovableSubarrays(nums)).toBe(1);
    });

    test('should return 2 for [1,2,3,2,1]', () => {
        const nums = [1, 2, 3, 2, 1];
        expect(countIncremovableSubarrays(nums)).toBe(2);
    });

    test('should return 0 for [1,2,3,4,5,6,7,8,9,10]', () => {
        const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        expect(countIncremovableSubarrays(nums)).toBe(0);
    });

    test('should return 1 for [1,2,3,4,5,6,7,8,9,10,1]', () => {
        const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1];
        expect(countIncremovableSubarrays(nums)).toBe(1);
    });

    test('should return 1 for [1,2,3,4,5,6,7,8,9,10,1,2]', () => {
        const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2];
        expect(countIncremovableSubarrays(nums)).toBe(1);
    });

    test('should return 2 for [1,2,3,4,5,6,7,8,9,10,1,2,3]', () => {
        const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3];
        expect(countIncremovableSubarrays(nums)).toBe(2);
    });

    test('should return 1 for [1,2,3,4,5,6,7,8,9,10,1,2,3,4]', () => {
        const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4];
        expect(countIncremovableSubarrays(nums)).toBe(1);
    });

    test('should return 0 for [1,2,3,4,5,6,7,8,9,10,1,2,3,4,5]', () => {
        const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5];
        expect(countIncremovableSubarrays(nums)).toBe(0);
    });

    test('should return 1 for [1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6]', () => {
        const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6];
        expect(countIncremovableSubarrays(nums)).toBe(1);
    });

    test('should return 2 for [1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7]', () => {
        const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7];
        expect(countIncremovableSubarrays(nums)).toBe(2);
    });

    test('should return 1 for [1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8]', () => {
        const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8];
        expect(countIncremovableSubarrays(nums)).toBe(1);
    });

    test('should return 0 for [1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9]', () => {
        const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        expect(countIncremovableSubarrays(nums)).toBe(0);
    });

    test('should return 1 for [1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]', () => {
        const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        expect(countIncremovableSubarrays(nums)).toBe(1);
    });
}); 