export const reversePrefix = (word: string, ch: string): string => {
  let fast = 0;

  let sub = "";
  let rest = "";

  while (fast < word.length) {
    if (word[fast] === ch) {
      sub = word.slice(0, fast + 1);
      rest = word.slice(fast + 1, word.length);
      return sub.split("").reverse().join("").concat(rest);
    } else fast++;
  }
  return word;
};
