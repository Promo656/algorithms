export const reverseWords = (s: string): string => {
  const cleared = s.trim().split(/\s+/);

  let left = 0;
  let right = cleared.length - 1;

  while (left < right) {
    [cleared[left], cleared[right]] = [cleared[right], cleared[left]];
    left++;
    right--;
  }
  return cleared.join(" ");
};
