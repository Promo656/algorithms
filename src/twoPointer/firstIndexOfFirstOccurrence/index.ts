
export const strStr = (haystack: string, needle: string): number => {
    if (needle.length > haystack.length) return -1;
    if (needle.length === haystack.length && needle === haystack) return 0;
  
    let start = 0;
    let end = needle.length - 1;
  
    while (end < haystack.length) {
      let match = haystack.slice(start, end + 1);
      if (match !== needle) {
        start++;
        end++;
      } else {
        return start;
      }
    }
    return -1;
  };
  