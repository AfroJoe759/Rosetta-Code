function factors(num) {
  let factors = [];

  for (let i = 1; i <= Math.floor(num / 2); i++) {
    if (num % i === 0) {
      factors.push(i);
    }
  }
  factors.push(num);

  return factors;
}
