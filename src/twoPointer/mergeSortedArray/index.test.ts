import { merge } from './index';

describe('merge', () => {
    test('should merge [1,2,3,0,0,0] and [2,5,6] into [1,2,2,3,5,6]', () => {
        const nums1 = [1, 2, 3, 0, 0, 0];
        const nums2 = [2, 5, 6];
        merge(nums1, 3, nums2, 3);
        expect(nums1).toEqual([1, 2, 2, 3, 5, 6]);
    });

    test('should merge [1] and [] into [1]', () => {
        const nums1 = [1];
        const nums2: number[] = [];
        merge(nums1, 1, nums2, 0);
        expect(nums1).toEqual([1]);
    });

    test('should merge [0] and [1] into [1]', () => {
        const nums1 = [0];
        const nums2 = [1];
        merge(nums1, 0, nums2, 1);
        expect(nums1).toEqual([1]);
    });

    test('should merge [1,2,3,0,0,0] and [4,5,6] into [1,2,3,4,5,6]', () => {
        const nums1 = [1, 2, 3, 0, 0, 0];
        const nums2 = [4, 5, 6];
        merge(nums1, 3, nums2, 3);
        expect(nums1).toEqual([1, 2, 3, 4, 5, 6]);
    });

    test('should merge [4,5,6,0,0,0] and [1,2,3] into [1,2,3,4,5,6]', () => {
        const nums1 = [4, 5, 6, 0, 0, 0];
        const nums2 = [1, 2, 3];
        merge(nums1, 3, nums2, 3);
        expect(nums1).toEqual([1, 2, 3, 4, 5, 6]);
    });

    test('should merge [1,3,5,0,0,0] and [2,4,6] into [1,2,3,4,5,6]', () => {
        const nums1 = [1, 3, 5, 0, 0, 0];
        const nums2 = [2, 4, 6];
        merge(nums1, 3, nums2, 3);
        expect(nums1).toEqual([1, 2, 3, 4, 5, 6]);
    });

    test('should merge [1,2,3,0,0,0] and [1,2,3] into [1,1,2,2,3,3]', () => {
        const nums1 = [1, 2, 3, 0, 0, 0];
        const nums2 = [1, 2, 3];
        merge(nums1, 3, nums2, 3);
        expect(nums1).toEqual([1, 1, 2, 2, 3, 3]);
    });

    test('should merge [1,1,1,0,0,0] and [2,2,2] into [1,1,1,2,2,2]', () => {
        const nums1 = [1, 1, 1, 0, 0, 0];
        const nums2 = [2, 2, 2];
        merge(nums1, 3, nums2, 3);
        expect(nums1).toEqual([1, 1, 1, 2, 2, 2]);
    });

    test('should merge [2,2,2,0,0,0] and [1,1,1] into [1,1,1,2,2,2]', () => {
        const nums1 = [2, 2, 2, 0, 0, 0];
        const nums2 = [1, 1, 1];
        merge(nums1, 3, nums2, 3);
        expect(nums1).toEqual([1, 1, 1, 2, 2, 2]);
    });

    test('should merge [1,2,3,4,0,0,0] and [5,6,7] into [1,2,3,4,5,6,7]', () => {
        const nums1 = [1, 2, 3, 4, 0, 0, 0];
        const nums2 = [5, 6, 7];
        merge(nums1, 4, nums2, 3);
        expect(nums1).toEqual([1, 2, 3, 4, 5, 6, 7]);
    });

    test('should merge [5,6,7,0,0,0,0] and [1,2,3,4] into [1,2,3,4,5,6,7]', () => {
        const nums1 = [5, 6, 7, 0, 0, 0, 0];
        const nums2 = [1, 2, 3, 4];
        merge(nums1, 3, nums2, 4);
        expect(nums1).toEqual([1, 2, 3, 4, 5, 6, 7]);
    });

    test('should merge [1,2,3,4,5,0,0,0] and [6,7,8] into [1,2,3,4,5,6,7,8]', () => {
        const nums1 = [1, 2, 3, 4, 5, 0, 0, 0];
        const nums2 = [6, 7, 8];
        merge(nums1, 5, nums2, 3);
        expect(nums1).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
    });

    test('should merge [6,7,8,0,0,0,0,0] and [1,2,3,4,5] into [1,2,3,4,5,6,7,8]', () => {
        const nums1 = [6, 7, 8, 0, 0, 0, 0, 0];
        const nums2 = [1, 2, 3, 4, 5];
        merge(nums1, 3, nums2, 5);
        expect(nums1).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
    });

    test('should merge [1,2,3,4,5,6,7,0,0,0] and [8,9,10] into [1,2,3,4,5,6,7,8,9,10]', () => {
        const nums1 = [1, 2, 3, 4, 5, 6, 7, 0, 0, 0];
        const nums2 = [8, 9, 10];
        merge(nums1, 7, nums2, 3);
        expect(nums1).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });

    test('should merge [8,9,10,0,0,0,0,0,0,0] and [1,2,3,4,5,6,7] into [1,2,3,4,5,6,7,8,9,10]', () => {
        const nums1 = [8, 9, 10, 0, 0, 0, 0, 0, 0, 0];
        const nums2 = [1, 2, 3, 4, 5, 6, 7];
        merge(nums1, 3, nums2, 7);
        expect(nums1).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });
}); 