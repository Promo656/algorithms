export const isPrefixString = (s: string, words: string[]): boolean => {
  let concatWords = "";
  for (let i = 0; i < words.length; i++) {
    concatWords = concatWords.concat(words[i]);
    if (concatWords === s) {
      return true;
    }
  }
  return false;
};
