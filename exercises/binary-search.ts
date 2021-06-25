export const binarySearch = (list: number[], item: number): number | null => {
  let low = 0;
  let high = list.length - 1;

  while (low <= high) {
    let middle = Math.floor(high - low / 2);
    if (list[middle] === item) {
      return middle;
    }

    if (list[middle] > item) {
      high = middle - 1;
    } else {
      low = middle + 1;
    }
  }

  return null;
};
