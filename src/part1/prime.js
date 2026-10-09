export const isPrime = (n) => {
  if (n < 2) return false;
  if (n === 2 || n === 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
};

export const findNthPrime = (n) => {
  if (typeof n !== 'number' || n < 1 || !Number.isInteger(n)) {
    throw new Error("Tham số N phải là số nguyên dương lớn hơn hoặc bằng 1");
  }

  let count = 0;
  let candidate = 2;

  while (true) {
    if (isPrime(candidate)) {
      count++;
      if (count === n) return candidate;
    }
    candidate++;
  }
};
