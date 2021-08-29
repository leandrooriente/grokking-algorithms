class NodeItem<T> {
  constructor(value: T) {
    this.value = value;
  }

  value: T;
  next: NodeItem<T> | null = null;
}

export class LinkedList<T> {
  head: NodeItem<T> | null = null;
  tail: NodeItem<T> | null = null;
  length: number = 0;

  push(value: T) {
    const newNode = new NodeItem(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else if (this.tail) {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;

    return newNode;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }

    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;

    this.length--;

    if (this.length === 0) {
      this.tail = null;
      this.head = null;
    }

    return current;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }

    const node = this.head;
    this.head = this.head.next;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return node;
  }

  unshift(value: T) {
    const newNode = new NodeItem(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;

    return newNode;
  }

  get(index: number) {
    if (index > this.length || index < 0) {
      return null;
    }

    let counter = 0;
    let current = this.head;

    while (counter !== index) {
      if (!current || !current.next) {
        return null;
      }
      current = current.next;
      counter++;
    }

    return current;
  }

  set(index: number, value: T) {
    const node = this.get(index);

    if (node) {
      node.value = value;
      return node;
    }

    return null;
  }

  insert(index: number, value: T) {
    if (index > this.length || index < 0) {
      return null;
    }

    if (index === this.length) {
      return this.push(value);
    }

    if (index === 0) {
      return this.unshift(value);
    }

    const newNode = new NodeItem<T>(value);
    const previousNode = this.get(index - 1) as NodeItem<T>;
    const nextNode = previousNode.next;
    previousNode.next = newNode;
    newNode.next = nextNode;

    this.length++;

    return newNode;
  }

  remove(index: number) {
    if (index > this.length || index < 0) {
      return null;
    }

    if (index === this.length) {
      return this.pop();
    }

    if (index === 0) {
      return this.shift();
    }

    const previousNode = this.get(index - 1) as NodeItem<T>;
    const nodeToBeRemoved = previousNode.next as NodeItem<T>;

    previousNode.next = nodeToBeRemoved.next;
    this.length--;

    return nodeToBeRemoved;
  }
}
