//Solution 1 - Recursive
function factorial(n) {
  if (n <= 0) {
    return 1;
  }

  if (n === 1) {
    return n;
  }

  return n * factorial(n - 1)
}

//Solution 2 - Iterative
function factorial(n) {
  let product = 1;
  for (let i = n; i > 0; i--) {
    product *= i;
  }

  return product;
}
