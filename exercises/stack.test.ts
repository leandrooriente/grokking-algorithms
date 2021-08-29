import { Stack } from "./stack";

describe("Stack", () => {
  it("should push elements into the stack", () => {
    const stack = new Stack();
    expect(stack.isEmpty()).toEqual(true);
    stack.push(123);
    expect(stack.isEmpty()).toEqual(false);
  });

  it("should peek elements in the stack", () => {
    const stack = new Stack();
    stack.push(123);
    expect(stack.peek()).toEqual(123);
    stack.push(321);
    expect(stack.peek()).toEqual(321);
    stack.pop();
    expect(stack.peek()).toEqual(123);
    stack.pop();
    expect(stack.peek()).toEqual(undefined);
  });

  it("should pop elements from the stack", () => {
    const stack = new Stack();
    stack.push(123);
    stack.push(321);
    stack.push(null);
    stack.push("foo");
    const obj = { a: 123 };
    stack.push(obj);
    const func = () => {};
    stack.push(func);

    expect(stack.pop()).toEqual(func);
    expect(stack.pop()).toEqual(obj);
    expect(stack.pop()).toEqual("foo");
    expect(stack.pop()).toEqual(null);
    expect(stack.pop()).toEqual(321);
    expect(stack.pop()).toEqual(123);
  });
});
