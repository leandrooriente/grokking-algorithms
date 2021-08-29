import { LinkedList } from "./linked-list";

export class Stack {
  storage: LinkedList<unknown>;

  constructor() {
    this.storage = new LinkedList<unknown>();
  }

  isEmpty() {
    return this.storage.length === 0;
  }

  peek(): unknown {
    return this.storage.tail?.value;
  }

  push(value: unknown) {
    this.storage.push(value);
  }

  pop(): unknown {
    return this.storage.pop()?.value;
  }
}
