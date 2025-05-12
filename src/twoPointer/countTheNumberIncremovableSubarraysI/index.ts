/**
 * Подсчитывает количество удаляемых подмассивов с помощью техники двух указателей
 * @param nums Исходный массив
 * @returns Количество удаляемых подмассивов
 */
export function countIncremovableSubarrays(nums: number[]): number {
    const n = nums.length;
    if (n <= 1) return 0;

    let count = 0;
    let left = 0;
    let right = 0;

    // Проходим по массиву с помощью двух указателей
    while (left < n) {
        // Расширяем правую границу подмассива
        while (right < n) {
            // Проверяем, можно ли удалить подмассив [left, right]
            if (isValidSubarray(nums, left, right)) {
                count++;
                right++;
            } else {
                break;
            }
        }
        left++;
        right = left;
    }

    return count;
}

/**
 * Проверяет, можно ли удалить подмассив [start, end]
 * @param nums Исходный массив
 * @param start Начальный индекс подмассива
 * @param end Конечный индекс подмассива
 * @returns true, если подмассив можно удалить
 */
function isValidSubarray(nums: number[], start: number, end: number): boolean {
    const n = nums.length;

    // Если удаляем весь массив
    if (start === 0 && end === n - 1) {
        return true;
    }

    // Проверяем, что элементы до подмассива образуют строго возрастающую последовательность
    for (let i = 1; i < start; i++) {
        if (nums[i] <= nums[i - 1]) {
            return false;
        }
    }

    // Проверяем, что элементы после подмассива образуют строго возрастающую последовательность
    for (let i = end + 2; i < n; i++) {
        if (nums[i] <= nums[i - 1]) {
            return false;
        }
    }

    // Проверяем, что последний элемент до подмассива меньше первого элемента после подмассива
    if (start > 0 && end < n - 1 && nums[start - 1] >= nums[end + 1]) {
        return false;
    }

    return true;
} 