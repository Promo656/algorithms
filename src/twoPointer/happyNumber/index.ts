export const happyNumber = (n: number) => {
  const sumOfSquareDigit = (number: number): number => {
    let sum = 0;

    while (number > 0) {
      let lastDigit = number % 10;
      sum += lastDigit ** 2;
      number = Math.floor(number / 10);
    }
    return sum;
  };

  let slow = n;
  let fast = sumOfSquareDigit(n);

  while (fast !== 1 && slow !== fast) {
    slow = sumOfSquareDigit(slow);
    fast = sumOfSquareDigit(sumOfSquareDigit(fast));
  }

  return fast === 1;
};
