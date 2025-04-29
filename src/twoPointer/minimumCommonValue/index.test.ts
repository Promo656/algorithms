import { getCommon } from './index';

describe('getCommon', () => {
    test('should return 2 for nums1 = [1,2,4] and nums2 = [2,3,4]', () => {
        expect(getCommon([1, 2, 4], [2, 3, 4])).toBe(2);
    });

    test('should return 2 for nums1 = [1,2,4,5] and nums2 = [2,3,4,5]', () => {
        expect(getCommon([1, 2, 4, 5], [2, 3, 4, 5])).toBe(2);
    });

    test('should return 4 for nums1 = [1,2,4] and nums2 = [3,4,5]', () => {
        expect(getCommon([1, 2, 4], [3, 4, 5])).toBe(4);
    });

    test('should return -1 for nums1 = [1,2,4] and nums2 = [3,5,7]', () => {
        expect(getCommon([1, 2, 4], [3, 5, 7])).toBe(-1);
    });

    test('should return 1 for nums1 = [1,2,4] and nums2 = [1,3,5]', () => {
        expect(getCommon([1, 2, 4], [1, 3, 5])).toBe(1);
    });

    test('should return 5 for nums1 = [1,2,4,5] and nums2 = [3,5,7]', () => {
        expect(getCommon([1, 2, 4, 5], [3, 5, 7])).toBe(5);
    });

    test('should return -1 for nums1 = [1,2,4] and nums2 = []', () => {
        expect(getCommon([1, 2, 4], [])).toBe(-1);
    });

    test('should return -1 for nums1 = [] and nums2 = [1,2,4]', () => {
        expect(getCommon([], [1, 2, 4])).toBe(-1);
    });

    test('should return -1 for nums1 = [] and nums2 = []', () => {
        expect(getCommon([], [])).toBe(-1);
    });

    test('should return 1 for nums1 = [1] and nums2 = [1]', () => {
        expect(getCommon([1], [1])).toBe(1);
    });

    test('should return -1 for nums1 = [1] and nums2 = [2]', () => {
        expect(getCommon([1], [2])).toBe(-1);
    });

    test('should return 2 for nums1 = [1,2,3] and nums2 = [2,3,4]', () => {
        expect(getCommon([1, 2, 3], [2, 3, 4])).toBe(2);
    });

    test('should return 3 for nums1 = [1,2,3,4] and nums2 = [3,4,5,6]', () => {
        expect(getCommon([1, 2, 3, 4], [3, 4, 5, 6])).toBe(3);
    });

    test('should return 4 for nums1 = [1,2,3,4,5] and nums2 = [4,5,6,7,8]', () => {
        expect(getCommon([1, 2, 3, 4, 5], [4, 5, 6, 7, 8])).toBe(4);
    });

    test('should return 5 for nums1 = [1,2,3,4,5] and nums2 = [5,6,7,8,9]', () => {
        expect(getCommon([1, 2, 3, 4, 5], [5, 6, 7, 8, 9])).toBe(5);
    });
}); 