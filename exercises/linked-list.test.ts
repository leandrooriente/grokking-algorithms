import { LinkedList } from "./linked-list";

describe("Linked list", () => {
  it("should push a new item", () => {
    const linkedList = new LinkedList();
    linkedList.push(2);

    expect(linkedList.get(0)).toEqual({ value: 2, next: null });
    expect(linkedList.head).toEqual({ value: 2, next: null });
    expect(linkedList.tail).toEqual({ value: 2, next: null });
    expect(linkedList.length).toBe(1);

    linkedList.push(10);

    expect(linkedList.get(0)).toEqual({
      value: 2,
      next: { value: 10, next: null },
    });
    expect(linkedList.tail).toEqual({ value: 10, next: null });
    expect(linkedList.get(0)).toEqual({
      value: 2,
      next: { value: 10, next: null },
    });
    expect(linkedList.length).toBe(2);
  });

  it("should pop the last item", () => {
    const linkedList = new LinkedList();
    linkedList.push(0);
    linkedList.push(1);

    expect(linkedList.tail).toEqual({ value: 1, next: null });
    expect(linkedList.length).toBe(2);

    linkedList.pop();

    expect(linkedList.tail).toEqual({ value: 0, next: null });
    expect(linkedList.length).toBe(1);

    linkedList.pop();

    expect(linkedList.head).toBeNull();
    expect(linkedList.tail).toBeNull();
    expect(linkedList.length).toBe(0);
  });

  it("should shift the first item", () => {
    const linkedList = new LinkedList();
    linkedList.push(0);
    linkedList.push(1);

    expect(linkedList.head).toEqual({
      value: 0,
      next: { value: 1, next: null },
    });
    expect(linkedList.length).toBe(2);

    linkedList.shift();

    expect(linkedList.head).toEqual({ value: 1, next: null });
    expect(linkedList.length).toBe(1);

    linkedList.shift();
    expect(linkedList.head).toBeNull();
    expect(linkedList.tail).toBeNull();
    expect(linkedList.length).toBe(0);
  });

  it("should unshift the first item", () => {
    const linkedList = new LinkedList();
    linkedList.unshift(1);

    expect(linkedList.head).toEqual({ value: 1, next: null });
    expect(linkedList.length).toBe(1);

    linkedList.unshift(0);

    expect(linkedList.head).toEqual({
      value: 0,
      next: { value: 1, next: null },
    });
    expect(linkedList.length).toBe(2);
  });

  it("should get an item", () => {
    const linkedList = new LinkedList();
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);

    expect(linkedList.get(2)).toEqual({ value: 3, next: null });
    expect(linkedList.get(1)).toEqual({
      value: 2,
      next: { value: 3, next: null },
    });
    expect(linkedList.get(0)).toEqual({
      value: 1,
      next: { value: 2, next: { value: 3, next: null } },
    });
    expect(linkedList.length).toBe(3);

    expect(linkedList.head).toEqual({
      value: 1,
      next: { value: 2, next: { value: 3, next: null } },
    });

    expect(linkedList.tail).toEqual({ value: 3, next: null });

    expect(linkedList.get(-1)).toBeNull();
    expect(linkedList.get(999)).toBeNull();
  });
});
