import { Queue } from "./queue";

describe("Queue", () => {
  it("should push elements into the queue", () => {
    const queue = new Queue();
    expect(queue.isEmpty()).toEqual(true);
    queue.push(123);
    expect(queue.isEmpty()).toEqual(false);
  });

  it("should peek elements in the queue", () => {
    const queue = new Queue();
    queue.push(123);
    expect(queue.peek()).toEqual(123);
    queue.push(321);
    expect(queue.peek()).toEqual(123);
    queue.shift();
    expect(queue.peek()).toEqual(321);
    queue.shift();
    expect(queue.peek()).toEqual(undefined);
  });

  it("should shift elements from the queue", () => {
    const queue = new Queue();
    queue.push(123);
    queue.push(321);
    queue.push(null);
    queue.push("foo");
    const obj = { a: 123 };
    queue.push(obj);
    const func = () => {};
    queue.push(func);

    expect(queue.shift()).toEqual(123);
    expect(queue.shift()).toEqual(321);
    expect(queue.shift()).toEqual(null);
    expect(queue.shift()).toEqual("foo");
    expect(queue.shift()).toEqual(obj);
    expect(queue.shift()).toEqual(func);
  });
});
