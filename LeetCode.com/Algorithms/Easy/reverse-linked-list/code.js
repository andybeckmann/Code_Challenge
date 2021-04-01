/**
 * LeetCode: 206 Reverse Linked List
 *
 * Description:
 *
 * Given the head of a singly linked list, reverse 
 * the list, and return the reversed list.
 *
 * Constraints:
 *
 * The number of nodes in the list is the range 
 * [0, 5000].
 * -5000 <= Node.val <= 5000
 *
 * Definition for singly-linked list:
 *
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 *
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
	let p = null,
		n = null
	while (head != null) {
		n = head.next
		head.next = p
		p = head
		head = n
	}
	return p
};