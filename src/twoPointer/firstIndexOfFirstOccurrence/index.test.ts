import { strStr } from './index';

describe('strStr', () => {
    test('должен вернуть 0, если needle пустая строка', () => {
        expect(strStr('hello', '')).toBe(0);
    });

    test('должен вернуть -1, если haystack пустая строка, а needle нет', () => {
        expect(strStr('', 'world')).toBe(-1);
    });

    test('должен вернуть -1, если needle длиннее haystack', () => {
        expect(strStr('hi', 'hello')).toBe(-1);
    });

    test('должен вернуть -1, если needle не найдена в haystack', () => {
        expect(strStr('hello', 'world')).toBe(-1);
    });

    test('должен вернуть индекс первого вхождения, если needle найдена в haystack', () => {
        expect(strStr('hello', 'll')).toBe(2);
        expect(strStr('abc', 'c')).toBe(2);
    });

    test('должен вернуть индекс первого вхождения, если needle найдена в начале haystack', () => {
        expect(strStr('hello', 'he')).toBe(0);
    });

    test('должен вернуть индекс первого вхождения, если needle найдена в конце haystack', () => {
        expect(strStr('hello', 'lo')).toBe(3);
    });

    test('должен вернуть индекс первого вхождения, если haystack и needle одинаковые', () => {
        expect(strStr('hello', 'hello')).toBe(0);
    });

    test('должен вернуть индекс первого вхождения, если needle встречается несколько раз', () => {
        expect(strStr('hellohello', 'hello')).toBe(0);
    });

    test('должен вернуть -1 для сложного случая', () => {
        expect(strStr('mississippi', 'issip')).toBe(4);
    });
});
