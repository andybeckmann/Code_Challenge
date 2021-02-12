/**
 * LeetCode: 671 Second Minimum Node In a Binary Tree (BFS)
 *
 * Description:
 *
 * Given a non-empty special binary tree consisting of nodes 
 * with the non-negative value, where each node in this tree has 
 * exactly two or zero sub-node. If the node has two sub-nodes, then 
 * this node's value is the smaller value among its two sub-nodes. 
 * More formally, the property root.val = min(root.left.val, 
 * root.right.val) always holds.
 *
 * Given such a binary tree, you need to output the second minimum 
 * value in the set made of all the nodes' value in the whole tree.
 *
 * If no such second minimum value exists, output -1 instead.
 *
 * Constraints:
 *
 * The number of nodes in the tree is in the range [1, 25]
 * 1 <= Node.val <= 231 - 1
 * root.val == min(root.left.val, root.right.val) for each internal 
 * node of the tree.
 *
 * Definition for a binary tree node:
 * 
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 *
 * @param {TreeNode} root
 * @return {number}
 */
var findSecondMinimumValue = function(root) {
	if (!root) {
		return -1
	}
	let queue = [root],
		v = Infinity
	while (queue.length) {
		let next = []
		for (let node of queue) {
			if (node.val < v) {
				if (node.val > root.val) {
					v = node.val
				}
				if (node.left) {
					next.push(node.left)
				}
				if (node.right) {
					next.push(node.right)
				}
			}
		}
		queue = next
	}
	if (v < Infinity) {
		return v
	} else {
		return -1
	}
};