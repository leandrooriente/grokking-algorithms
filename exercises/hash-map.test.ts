import { HashMap } from "./hash-map";

describe("Hash Map", () => {
  it("should encode a key", () => {
    const hashMap = new HashMap();
    expect(hashMap.encode(123)).toBe(538);
    expect(hashMap.encode(123)).toBe(538);
    expect(hashMap.encode(123)).toBe(538);
  });

  it("should set and get a value", () => {
    const hashMap = new HashMap();
    hashMap.set(123, 321);
    hashMap.set(0, null);
    hashMap.set("abc", "cba");
    hashMap.set("foo", "bar");
    const obj = { a: 1 };
    hashMap.set("obj", obj);

    expect(hashMap.get(123)).toBe(321);
    expect(hashMap.get(0)).toBe(null);
    expect(hashMap.get("abc")).toBe("cba");
    expect(hashMap.get("foo")).toBe("bar");
    expect(hashMap.get("obj")).toBe(obj);
  });

  it("should override an existing value if passing the same key", () => {
    const hashMap = new HashMap();
    hashMap.set(123, 321);
    expect(hashMap.get(123)).toBe(321);
    hashMap.set(123, "foo");
    expect(hashMap.get(123)).toBe("foo");
  });

  it("should check if a key already exist on the map", () => {
    const hashMap = new HashMap();
    hashMap.set(123, 321);
    hashMap.set(0, null);
    hashMap.set("abc", "cba");
    hashMap.set("foo", "bar");
    const obj = { a: 1 };
    hashMap.set("obj", obj);

    expect(hashMap.has(123)).toBe(true);
    expect(hashMap.has(0)).toBe(true);
    expect(hashMap.has("abc")).toBe(true);
    expect(hashMap.has("foo")).toBe(true);
    expect(hashMap.has("obj")).toBe(true);

    expect(hashMap.has("obj2")).toBe(false);
    expect(hashMap.has(321)).toBe(false);
  });

  it("should remove an element from the map", () => {
    const hashMap = new HashMap();
    hashMap.set(123, 321);
    expect(hashMap.get(123)).toBe(321);
    hashMap.remove(123);
    expect(hashMap.get(123)).toBe(undefined);
  });
});
