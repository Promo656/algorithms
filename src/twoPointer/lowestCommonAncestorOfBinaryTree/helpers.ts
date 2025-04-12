import { Node } from "./index";

// Creates a binary tree from an array of values and sets up parent references
export function createTree(values: (number | null)[]): Node | null {
  if (values.length === 0 || values[0] === null) return null;

  const nodes: (Node | null)[] = [];

  // Create all nodes
  for (let i = 0; i < values.length; i++) {
    if (values[i] === null) {
      nodes[i] = null;
    } else {
      nodes[i] = new Node(values[i]!);
    }
  }

  // Set up left, right and parent connections
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    if (!node) continue;

    const leftIndex = 2 * i + 1;
    const rightIndex = 2 * i + 2;

    if (leftIndex < nodes.length) {
      node.left = nodes[leftIndex];
      if (nodes[leftIndex]) {
        nodes[leftIndex]!.parent = node;
      }
    }

    if (rightIndex < nodes.length) {
      node.right = nodes[rightIndex];
      if (nodes[rightIndex]) {
        nodes[rightIndex]!.parent = node;
      }
    }
  }

  return nodes[0];
}

// Finds a node by its value in the tree
export function findNode(root: Node | null, value: number): Node | null {
  if (!root) return null;
  if (root.val === value) return root;

  const left = findNode(root.left, value);
  if (left) return left;

  return findNode(root.right, value);
}
