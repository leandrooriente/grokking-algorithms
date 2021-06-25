const getMinIndex = (arr: number[]): number => {
  return arr.reduce((smallestIndex, number, index) => {
    if (arr[smallestIndex] > number) {
      smallestIndex = index;
    }

    return smallestIndex;
  }, 0);
};

export const selectionSort = (arr: number[]): number[] => {
  let newArr: number[] = [];

  while (arr.length > 0) {
    const smallestIndex = getMinIndex(arr);
    const smallestNumber = arr.splice(smallestIndex, 1)[0];
    newArr.push(smallestNumber);
  }

  return newArr;
};
