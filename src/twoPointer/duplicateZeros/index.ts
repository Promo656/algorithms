/**
 * Дублирует все нули в массиве, сдвигая остальные элементы вправо
 * @param arr Массив чисел
 */
export function duplicateZeros(arr: number[]): void {
    const n = arr.length;
    let possibleDups = 0;
    let length = 0;

    // Находим количество элементов, которые останутся в массиве
    for (let i = 0; i < n; i++) {
        if (arr[i] === 0) {
            possibleDups++;
        }
        length++;

        if (length + possibleDups >= n) {
            break;
        }
    }

    // Начинаем с конца массива
    let i = length - 1;
    let j = n - 1;

    // Если последний элемент, который мы копируем, равен 0,
    // и у нас нет места для его дублирования, просто копируем его один раз
    if (length + possibleDups > n) {
        arr[j] = arr[i];
        j--;
        i--;
    }

    // Копируем элементы с конца
    while (i >= 0) {
        if (arr[i] === 0) {
            arr[j] = 0;
            j--;
            arr[j] = 0;
        } else {
            arr[j] = arr[i];
        }
        i--;
        j--;
    }
} 