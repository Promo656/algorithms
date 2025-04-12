class Node {
  val: number;
  left: Node | null;
  right: Node | null;
  parent: Node | null;
  constructor(
    val?: number,
    left?: Node | null,
    right?: Node | null,
    parent?: Node | null
  ) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.parent = parent === undefined ? null : parent;
  }
}

const lowestCommonAncestor = (p: Node, q: Node) => {
  let ptr1 = p;
  let ptr2 = q;

  while (ptr1 !== ptr2) {
    if (ptr1.parent) {
      ptr1 = ptr1.parent;
    } else {
      ptr1 = q;
    }

    if (ptr2.parent) {
      ptr2 = ptr2.parent;
    } else {
      ptr2 = p;
    }
  }
  return ptr1;
};

export { Node, lowestCommonAncestor };
