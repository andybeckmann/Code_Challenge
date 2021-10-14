/**
 * LeetCode: 94 Binary tree inorder traversal
 * 
 * Description:
 * 
 * Given the root of a binary tree, return the inorder traversal of its node's values.
 * 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
	let r = []
	traverseInorder(root)
	function traverseInorder(root) {
		if (!root) {
			return -1
		}
		traverseInorder(root.left);
		r.push(root.val);
		traverseInorder(root.right);
	}
	return r
};