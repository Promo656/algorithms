export const countPairs = (nums: number[], target: number): number => {
  nums.sort((a, b) => a - b);

  let start = 0;
  let end = nums.length - 1;
  let count = 0;

  while (start < end) {
    if (nums[start] + nums[end] < target) {
      count += end - start;
      start++;
    } else {
      end--;
    }
  }
  return count;
};
