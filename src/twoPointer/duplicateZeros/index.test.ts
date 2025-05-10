import { duplicateZeros } from './index';

describe('duplicateZeros', () => {
    test('should duplicate zeros in [1,0,2,3,0,4,5,0]', () => {
        const arr = [1, 0, 2, 3, 0, 4, 5, 0];
        duplicateZeros(arr);
        expect(arr).toEqual([1, 0, 0, 2, 3, 0, 0, 4]);
    });

    test('should not modify array without zeros [1,2,3]', () => {
        const arr = [1, 2, 3];
        duplicateZeros(arr);
        expect(arr).toEqual([1, 2, 3]);
    });

    test('should handle array with single zero [0]', () => {
        const arr = [0];
        duplicateZeros(arr);
        expect(arr).toEqual([0]);
    });

    test('should handle array with all zeros [0,0,0]', () => {
        const arr = [0, 0, 0];
        duplicateZeros(arr);
        expect(arr).toEqual([0, 0, 0]);
    });

    test('should handle array with zeros at the end [1,2,0,0]', () => {
        const arr = [1, 2, 0, 0];
        duplicateZeros(arr);
        expect(arr).toEqual([1, 2, 0, 0]);
    });

    test('should handle array with zeros at the beginning [0,0,1,2]', () => {
        const arr = [0, 0, 1, 2];
        duplicateZeros(arr);
        expect(arr).toEqual([0, 0, 0, 0]);
    });

    test('should handle array with alternating zeros [0,1,0,1,0]', () => {
        const arr = [0, 1, 0, 1, 0];
        duplicateZeros(arr);
        expect(arr).toEqual([0, 0, 1, 0, 0]);
    });

    test('should handle array with consecutive zeros [1,0,0,2,3]', () => {
        const arr = [1, 0, 0, 2, 3];
        duplicateZeros(arr);
        expect(arr).toEqual([1, 0, 0, 0, 0]);
    });

    test('should handle empty array', () => {
        const arr: number[] = [];
        duplicateZeros(arr);
        expect(arr).toEqual([]);
    });

    test('should handle array with single element [1]', () => {
        const arr = [1];
        duplicateZeros(arr);
        expect(arr).toEqual([1]);
    });

    test('should handle array with zeros in the middle [1,2,0,3,4]', () => {
        const arr = [1, 2, 0, 3, 4];
        duplicateZeros(arr);
        expect(arr).toEqual([1, 2, 0, 0, 3]);
    });

    test('should handle array with multiple zeros [0,1,0,2,0,3]', () => {
        const arr = [0, 1, 0, 2, 0, 3];
        duplicateZeros(arr);
        expect(arr).toEqual([0, 0, 1, 0, 0, 2]);
    });

    test('should handle array with zeros at the end [1,2,3,0]', () => {
        const arr = [1, 2, 3, 0];
        duplicateZeros(arr);
        expect(arr).toEqual([1, 2, 3, 0]);
    });

    test('should handle array with zeros at the beginning and end [0,1,2,0]', () => {
        const arr = [0, 1, 2, 0];
        duplicateZeros(arr);
        expect(arr).toEqual([0, 0, 1, 2]);
    });
}); 