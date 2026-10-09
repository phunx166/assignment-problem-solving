export const findKthLargest = (arr, k) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new Error("Mảng không hợp lệ hoặc rỗng");
  }
  if (k < 1 || k > arr.length) {
    throw new Error("K nằm ngoài phạm vi mảng");
  }

  const targetIndex = arr.length - k;
  const clone = [...arr];

  const quickSelect = (left, right) => {
    const pivot = clone[right];
    let pIndex = left;

    for (let i = left; i < right; i++) {
      if (clone[i] <= pivot) {
        [clone[i], clone[pIndex]] = [clone[pIndex], clone[i]];
        pIndex++;
      }
    }
    [clone[pIndex], clone[right]] = [clone[right], clone[pIndex]];

    if (pIndex === targetIndex) return clone[pIndex];
    if (pIndex < targetIndex) return quickSelect(pIndex + 1, right);
    return quickSelect(left, pIndex - 1);
  };

  return quickSelect(0, clone.length - 1);
};