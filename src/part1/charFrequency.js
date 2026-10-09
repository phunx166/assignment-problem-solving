export const countCharFrequency = (str) => {
  if (typeof str !== 'string') {
    throw new TypeError("Đầu vào phải là chuỗi");
  }

  const freqMap = new Map();

  for (const char of str) {
    const currentCount = freqMap.get(char) || 0;
    freqMap.set(char, currentCount + 1);
  }

  return freqMap;
};
