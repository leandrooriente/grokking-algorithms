import { binarySearch } from "./binary-search";

describe("Binary Search", () => {
  it("should return null if not found", () => {
    expect(binarySearch([], 2)).toBeNull();
  });

  it("should return the index if found", () => {
    expect(binarySearch([0, 1, 2], 2)).toBe(2);
    expect(binarySearch([0, 1, 2], 0)).toBe(0);
    expect(binarySearch([2], 2)).toBe(0);
    expect(binarySearch([0, 23, 35, 79, 143, 244], 143)).toBe(4);
  });
});
