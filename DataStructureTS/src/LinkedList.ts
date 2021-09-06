import CustomNode from "./Node";

class LinkedList<T> {
  head: CustomNode<T>;
  tail: CustomNode<T>;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(data: T): void {
    const newNode = new CustomNode(data);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
  }

  insertBefore(node: CustomNode<T>, data: T): void {
    if (this.indexOf(node) < 0) return;

    const newNode = new CustomNode(data);

    if (node.prev) {
      const prevNode = node.prev;

      newNode.next = node;
      prevNode.next = newNode;
      newNode.prev = prevNode;
      node.prev = newNode;
    } else {
      this.head = newNode;
      newNode.next = node;
      node.prev = newNode;
    }
    this.length++;
  }

  insertAfter(node: CustomNode<T>, data: T): void {
    if (this.indexOf(node) < 0) return;

    const newNode = new CustomNode(data);

    if (node.next) {
      newNode.next = node.next;
      node.next.prev = newNode;
      newNode.prev = node;
      node.next = newNode;
    } else {
      this.tail = newNode;
      newNode.prev = node;
      node.next = newNode;
    }
    this.length++;
  }

  get(index: number): CustomNode<T> {
    let iter = this.head;
    let i = 0;

    while (iter !== null) {
      if (i === index) return iter;
      iter = iter.next;
      i++;
    }
    return null;
  }

  remove(data: T): void {
    const targetNode = this.find(data);

    if (targetNode.prev === null) {
      this.head = targetNode.next;
      targetNode.next.prev = null;
    } else if (targetNode.next === null) {
      targetNode.prev.next = null;
      this.tail = this.tail.prev;
    } else {
      const prevNode = targetNode.prev;
      const nextNode = targetNode.next;

      prevNode.next = nextNode;
      nextNode.prev = prevNode;
    }
    this.length--;
  }

  removeAll(): void {
    let iter = this.head;

    if (iter === null) return;

    while (iter.next !== null) {
      const nextNode = iter.next;

      iter.next = null;
      nextNode.prev = null;
      iter = nextNode;
    }
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  find(data: T): CustomNode<T> {
    let iter = this.head;

    while (iter !== null) {
      if (iter.data === data) return iter;
      iter = iter.next;
    }
    return null;
  }

  indexOf(node: CustomNode<T>): number {
    let iter = this.head;
    let i = 0;

    while (iter !== null) {
      if (iter === node) return i;
      iter = iter.next;
      i++;
    }
    return -1;
  }

  print(): void {
    let iter = this.head;
    console.log("=====================");
    while (iter !== null) {
      console.log(iter.data);
      iter = iter.next;
    }
    console.log("print end");
  }
}

export default LinkedList;
