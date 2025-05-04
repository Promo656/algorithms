import { findIndices } from './index';

describe('findIndices', () => {
    test('should find indices [0, 3] for nums = [5,1,4,1], indexDiff = 2, valueDiff = 4', () => {
        const nums = [5, 1, 4, 1];
        const indexDiff = 2;
        const valueDiff = 4;
        const result = findIndices(nums, indexDiff, valueDiff);
        expect(result).toEqual([0, 3]);
    });

    test('should find indices [0, 0] for nums = [2,1], indexDiff = 0, valueDiff = 0', () => {
        const nums = [2, 1];
        const indexDiff = 0;
        const valueDiff = 0;
        const result = findIndices(nums, indexDiff, valueDiff);
        expect(result).toEqual([0, 0]);
    });

    test('should return [-1, -1] for nums = [1,2,3], indexDiff = 2, valueDiff = 4', () => {
        const nums = [1, 2, 3];
        const indexDiff = 2;
        const valueDiff = 4;
        const result = findIndices(nums, indexDiff, valueDiff);
        expect(result).toEqual([-1, -1]);
    });

    test('should find indices [0, 3] for nums = [10,5,2,8], indexDiff = 3, valueDiff = 2', () => {
        const nums = [10, 5, 2, 8];
        const indexDiff = 3;
        const valueDiff = 2;
        const result = findIndices(nums, indexDiff, valueDiff);
        expect(result).toEqual([0, 3]);
    });

    test('should find indices [0, 3] for nums = [1,2,3,4,5], indexDiff = 3, valueDiff = 3', () => {
        const nums = [1, 2, 3, 4, 5];
        const indexDiff = 3;
        const valueDiff = 3;
        const result = findIndices(nums, indexDiff, valueDiff);
        expect(result).toEqual([0, 3]);
    });

    test('should return [-1, -1] for empty array', () => {
        const nums: number[] = [];
        const indexDiff = 0;
        const valueDiff = 0;
        const result = findIndices(nums, indexDiff, valueDiff);
        expect(result).toEqual([-1, -1]);
    });

    test('should find indices [0, 1] for nums = [1,2], indexDiff = 1, valueDiff = 1', () => {
        const nums = [1, 2];
        const indexDiff = 1;
        const valueDiff = 1;
        const result = findIndices(nums, indexDiff, valueDiff);
        expect(result).toEqual([0, 1]);
    });

    test('should find indices [0, 2] for nums = [1,2,3], indexDiff = 2, valueDiff = 2', () => {
        const nums = [1, 2, 3];
        const indexDiff = 2;
        const valueDiff = 2;
        const result = findIndices(nums, indexDiff, valueDiff);
        expect(result).toEqual([0, 2]);
    });

    test('should find indices [0, 3] for nums = [1,1,1,1], indexDiff = 3, valueDiff = 0', () => {
        const nums = [1, 1, 1, 1];
        const indexDiff = 3;
        const valueDiff = 0;
        const result = findIndices(nums, indexDiff, valueDiff);
        expect(result).toEqual([0, 3]);
    });

    test('should find indices [0, 2] for nums = [1,2,1], indexDiff = 2, valueDiff = 0', () => {
        const nums = [1, 2, 1];
        const indexDiff = 2;
        const valueDiff = 0;
        const result = findIndices(nums, indexDiff, valueDiff);
        expect(result).toEqual([0, 2]);
    });

    test('should find indices [0, 4] for nums = [1,2,3,4,5], indexDiff = 4, valueDiff = 4', () => {
        const nums = [1, 2, 3, 4, 5];
        const indexDiff = 4;
        const valueDiff = 4;
        const result = findIndices(nums, indexDiff, valueDiff);
        expect(result).toEqual([0, 4]);
    });

    test('should find indices [0, 2] for nums = [5,4,3,2,1], indexDiff = 2, valueDiff = 2', () => {
        const nums = [5, 4, 3, 2, 1];
        const indexDiff = 2;
        const valueDiff = 2;
        const result = findIndices(nums, indexDiff, valueDiff);
        expect(result).toEqual([0, 2]);
    });

    test('should find indices [0, 3] for nums = [1,2,3,4], indexDiff = 3, valueDiff = 3', () => {
        const nums = [1, 2, 3, 4];
        const indexDiff = 3;
        const valueDiff = 3;
        const result = findIndices(nums, indexDiff, valueDiff);
        expect(result).toEqual([0, 3]);
    });

    test('should return [-1, -1] for nums = [1,2,3,4], indexDiff = 4, valueDiff = 1', () => {
        const nums = [1, 2, 3, 4];
        const indexDiff = 4;
        const valueDiff = 1;
        const result = findIndices(nums, indexDiff, valueDiff);
        expect(result).toEqual([-1, -1]);
    });
}); 