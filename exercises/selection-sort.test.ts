import { selectionSort } from "./selection-sort";
describe("Selection Sort", () => {
  it("should return an ordered array of numbers", () => {
    expect(selectionSort([1, 2, 3])).toEqual([1, 2, 3]);
    expect(selectionSort([2, 1, 3])).toEqual([1, 2, 3]);
    expect(selectionSort([46, 21, 78, 3, -9, 112, -223, 9])).toEqual([
      -223, -9, 3, 9, 21, 46, 78, 112,
    ]);
  });
});
