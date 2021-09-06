class CustomNode<T> {
  prev: CustomNode<T>;
  next: CustomNode<T>;
  data: T;

  constructor(data: T) {
    this.prev = null;
    this.next = null;
    this.data = data;
  }
}

export default CustomNode;
