import { LinkedList } from "./linked-list";

type hashMapKey = string | number;
interface StorageItem {
  key: hashMapKey;
  value: unknown;
}

export class HashMap {
  size: number;
  storage: LinkedList<StorageItem>[];

  constructor(size: number = 2056) {
    this.size = size;
    this.storage = new Array(size);
  }

  encode(key: hashMapKey): number {
    if (typeof key !== "string" && typeof key !== "number") {
      throw new Error("Key must be a number or string");
    }

    const PRIME_NUMBER = 31;
    const stringfiedKey = typeof key === "number" ? key.toString() : key;
    const encodedKey = Array.from(stringfiedKey).reduce(
      (acc, _, index): number => {
        acc += stringfiedKey.charCodeAt(index) * PRIME_NUMBER;
        return acc;
      },
      0
    );

    return encodedKey % this.size;
  }

  set(key: hashMapKey, value: unknown) {
    const hashedKey = this.encode(key);

    if (this.storage[hashedKey] === undefined) {
      const list = new LinkedList<StorageItem>();
      list.push({ key, value });
      this.storage[hashedKey] = list;
    } else {
      let node = this.storage[hashedKey].head;
      while (node) {
        if (node.value.key === key) {
          node.value.value = value;
          return;
        }

        node = node.next;
      }

      this.storage[hashedKey].push({ key, value });
    }
  }

  get(key: hashMapKey) {
    const hashedKey = this.encode(key);
    if (this.storage[hashedKey] !== undefined) {
      let node = this.storage[hashedKey].head;
      while (node) {
        if (node.value?.key === key) {
          return node.value.value;
        }

        node = node.next;
      }
    }
  }

  has(key: hashMapKey): boolean {
    return this.get(key) !== undefined;
  }

  remove(key: hashMapKey) {
    const hashedKey = this.encode(key);
    if (this.storage[hashedKey] === undefined) {
      return;
    }

    let index = 0;
    let node = this.storage[hashedKey].head;

    while (node) {
      if (node.value?.key === key) {
        this.storage[hashedKey].remove(index);
        return;
      }

      node = node.next;
      index++;
    }
  }
}
