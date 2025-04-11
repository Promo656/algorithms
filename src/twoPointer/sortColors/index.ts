export const sortColors = (nums: number[]): number[] => {
  let left = 0;
  let right = nums.length - 1;
  let current = 0;

  while (current <= right) {
    if (nums[current] === 0) {
      [nums[left], nums[current]] = [nums[current], nums[left]];
      left++;
      current++;
    } else if (nums[current] === 1) {
      current++;
    } else {
      [nums[current], nums[right]] = [nums[right], nums[current]];
      right--;
    }
  }

  return nums;
};
