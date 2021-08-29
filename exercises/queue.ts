import { LinkedList } from "./linked-list";

export class Queue {
  storage;

  constructor() {
    this.storage = new LinkedList<unknown>();
  }

  isEmpty() {
    return this.storage.length === 0;
  }

  peek(): unknown {
    return this.storage.head?.value;
  }

  push(value: unknown) {
    this.storage.push(value);
  }

  shift(): unknown {
    return this.storage.shift()?.value;
  }
}
