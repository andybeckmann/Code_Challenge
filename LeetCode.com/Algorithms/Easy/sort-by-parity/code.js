/**
 * LeetCode: 922 Sort Array By Parity II
 *
 * Description: 
 *
 * Given an array A of non-negative integers, half of 
 * the integers in A are odd, and half of the integers 
 * are even.
 *
 * Sort the array so that whenever A[i] is odd, i is odd; 
 * and whenever A[i] is even, i is even.
 *
 * You may return any answer array that satisfies this 
 * condition.
 * 
 * Constraints:
 *
 * 2 <= A.length <= 20000
 * A.length % 2 == 0
 * 0 <= A[i] <= 1000
 * 
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
	let e = [],
		o = [],
		f = []
	for (let x=0; x<A.length; x++) {
		if (A[x] % 2 == 0) {
			e.push(A[x])
		} else {
			o.push(A[x])
		}
	}
	for (let y=0; y<o.length; y++) {
		f.push(e[y])
		f.push(o[y])
	}
	return f
};