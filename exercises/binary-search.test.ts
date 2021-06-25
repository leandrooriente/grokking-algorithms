import { binarySearch } from "./binary-search";

describe("Binary Search", () => {
  it("should return null if not found", () => {
    expect(binarySearch([], 2)).toBeNull();
  });
});
