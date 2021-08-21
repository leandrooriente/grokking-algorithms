export const quicksort = (arr: Number[]): Number[] => {
  if (arr.length < 2) {
    return arr;
  }

  const pivot = Math.floor(Math.random() * 7919) % (arr.length - 1);
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === pivot) {
      continue;
    }

    if (arr[i] < arr[pivot]) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return Array.prototype.concat(quicksort(left), arr[pivot], quicksort(right));
};
