const isDigit = (value: string): boolean => !isNaN(parseInt(value, 10));

export function isValidAbbreviation(word: string, abbr: string): boolean {
  let wordIdx = 0;
  let abbrIdx = 0;

  while (abbrIdx < abbr.length) {
    if (isDigit(abbr[abbrIdx])) {
      if (abbr[abbrIdx] === "0") {
        return false;
      }
      let nextPos = 0;
      while (abbrIdx < abbr.length && isDigit(abbr[abbrIdx])) {
        nextPos = nextPos * 10 + parseInt(abbr[abbrIdx], 10);
        abbrIdx++;
      }
      wordIdx += nextPos;
    } else {
      if (wordIdx >= word.length || word[wordIdx] !== abbr[abbrIdx]) {
        return false;
      }
      wordIdx++;
      abbrIdx++;
    }
  }

  return wordIdx === word.length && abbrIdx === abbr.length;
}
