export const isStrobogrammatic = (num: string | number): boolean => {
  const stringNumber = num.toString();

  const dict = new Map([
    ["0", "0"],
    ["1", "1"],
    ["6", "9"],
    ["8", "8"],
    ["9", "6"],
  ]);

  let left = 0;
  let right = stringNumber.length - 1;

  while (left <= right) {
    if (
      !dict.has(stringNumber[left]) ||
      dict.get(stringNumber[left]) !== stringNumber[right]
    ) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};
