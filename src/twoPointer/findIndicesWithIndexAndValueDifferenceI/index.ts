/**
 * Находит индексы i и j в массиве nums, удовлетворяющие условиям:
 * 1. |i - j| >= indexDiff
 * 2. |nums[i] - nums[j]| >= valueDiff
 * @param nums Массив чисел
 * @param indexDiff Минимальная разница между индексами
 * @param valueDiff Минимальная разница между значениями
 * @returns Массив из двух индексов [i, j] или [-1, -1], если таких индексов нет
 */
export function findIndices(nums: number[], indexDiff: number, valueDiff: number): number[] {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + indexDiff; j < nums.length; j++) {
            if (Math.abs(nums[i] - nums[j]) >= valueDiff) {
                return [i, j];
            }
        }
    }
    return [-1, -1];
} 