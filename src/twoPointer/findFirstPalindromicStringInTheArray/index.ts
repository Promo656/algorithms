export const firstPalindrome = (words: string[]): string => {
  outer: for (let i = 0; i < words.length; i++) {
    let start = 0;
    let end = words[i].length - 1;

    while (start <= end) {
      if (words[i][start] !== words[i][end]) {
        continue outer;
      } else {
        start++;
        end--;
      }
    }
    return words[i];
  }
  return "";
};
