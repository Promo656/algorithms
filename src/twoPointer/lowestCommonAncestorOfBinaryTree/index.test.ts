import { Node, lowestCommonAncestor } from "./index";
import { createTree, findNode } from "./helpers";

describe("lowestCommonAncestor", () => {
  test("should find LCA for simple case", () => {
    // Create tree:
    //     3
    //    / \
    //   5   1
    //  / \ / \
    // 6  2 0  8
    //   / \
    //  7   4

    const root = createTree([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]);

    const node5 = findNode(root, 5)!;
    const node1 = findNode(root, 1)!;
    const node4 = findNode(root, 4)!;
    const node7 = findNode(root, 7)!;
    const node2 = findNode(root, 2)!;

    expect(lowestCommonAncestor(node5, node1)).toBe(root);
    expect(lowestCommonAncestor(node5, node4)).toBe(node5);
    expect(lowestCommonAncestor(node7, node4)).toBe(node2);
  });

  test("should find LCA when one node is ancestor of another", () => {
    // Create tree:
    //     1
    //    /
    //   2
    //  /
    // 3

    const root = createTree([1, 2, null, 3, null])!;

    const node2 = findNode(root, 2)!;
    const node3 = findNode(root, 3)!;

    expect(lowestCommonAncestor(root, node3)).toBe(root);
    expect(lowestCommonAncestor(node2, node3)).toBe(node2);
  });

  test("should find LCA for complex case", () => {
    // Create tree:
    //       1
    //      / \
    //     2   3
    //    / \   \
    //   4   5   6
    //      / \
    //     7   8
    //        /
    //       9

    const root = createTree([
      1,
      2,
      3,
      4,
      5,
      null,
      6,
      null,
      null,
      7,
      8,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      9,
    ]);

    const node7 = findNode(root, 7)!;
    const node9 = findNode(root, 9)!;
    const node5 = findNode(root, 5)!;
    const node4 = findNode(root, 4)!;
    const node6 = findNode(root, 6)!;
    const node3 = findNode(root, 3)!;

    expect(lowestCommonAncestor(node4, node6)).toBe(root);
    expect(lowestCommonAncestor(node9, node3)).toBe(root);
  });

  test("should find LCA for same nodes", () => {
    const root = createTree([1, 2, 3]);

    const node2 = findNode(root, 2)!;

    expect(lowestCommonAncestor(node2, node2)).toBe(node2);
  });
});
