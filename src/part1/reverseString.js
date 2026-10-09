export const reverseString = (str) => {
  if (typeof str !== 'string') {
    throw new TypeError("Đầu vào phải là một chuỗi");
  }

  const chars = [...str];
  let left = 0;
  let right = chars.length - 1;

  while (left < right) {
    const temp = chars[left];
    chars[left] = chars[right];
    chars[right] = temp;
    left++;
    right--;
  }

  let result = "";
  for (const ch of chars) {
    result += ch;
  }
  return result;
};
