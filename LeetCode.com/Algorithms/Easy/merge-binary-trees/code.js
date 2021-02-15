/**
 * LeetCode: 617 Merge Two Binary Trees
 *
 * Description:
 *
 * You are given two binary trees root1 and root2.
 *
 * Imagine that when you put one of them to cover the other, 
 * some nodes of the two trees are overlapped while the others 
 * are not. You need to merge the two trees into a new binary 
 * tree. The merge rule is that if two nodes overlap, then 
 * sum node values up as the new value of the merged node. 
 * Otherwise, the NOT null node will be used as the node of 
 * the new tree.
 *
 * Constraints:
 *
 * The number of nodes in both trees is in the range [0, 2000].
 * -10^4 <= Node.val <= 10^4
 *
 * Definition for a binary tree node:
 *
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 *
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
	if (!t1 || !t2) {
		return t2 || t1
	}
	t1.val += t2.val
	t1.left = mergeTrees(t1.left, t2.left) 
	t1.right = mergeTrees(t1.right, t2.right)
	return t1
};