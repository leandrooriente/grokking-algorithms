import { quicksort } from "./quicksort";

const hugeArray = new Array(1000000).fill(0).map((n, i) => i);
describe("Quick Sort", () => {
  it("should return an ordered array", () => {
    expect(quicksort([3, 2, 1])).toEqual([1, 2, 3]);
    expect(quicksort([3, 2, 7, 1])).toEqual([1, 2, 3, 7]);
    expect(quicksort([12, 3, 2, 7, 1])).toEqual([1, 2, 3, 7, 12]);
    expect(quicksort([1])).toEqual([1]);
    expect(quicksort([])).toEqual([]);
    expect(quicksort(hugeArray)).toEqual(hugeArray);
  });
});
