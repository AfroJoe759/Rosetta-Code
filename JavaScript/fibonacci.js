function fibonacci(n) {
  if (n === 0) {
    return 0;
  }

  if (n === 1) {
    return 1;
  }

  let prevNum = 0;
  let fibonacci = 1;

  for (let i = 2; i < n; i++) {
    fibonacci += prevNum;
    prevNum = fibonacci - prevNum;
  }

  return fibonacci;
}
