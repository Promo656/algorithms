export const isPrefixOfWord = (
  sentence: string,
  searchWord: string
): number => {
  let words = sentence.split(/\s+/);

  for (let i = 0; i < words.length; i++) {
    if (words[i].startsWith(searchWord)) {
      return i + 1;
    }
  }

  return -1;
};
