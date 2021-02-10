/**
 * LeetCode: 1342 Number of Steps to Reduce a Number to Zero
 *
 * Description:
 *
 * Given a non-negative integer num, return the number of steps to 
 * reduce it to zero. If the current number is even, you have to 
 * divide it by 2, otherwise, you have to subtract 1 from it.
 *
 * Constraints:
 *
 * 0 <= num <= 10^6
 *
 * @param {number} num
 * @return {number}
 */
var numberOfSteps  = function(num) {
	let f = 0
	for (let i=num; i>0; i) {
		f += 1
		if (i % 2 == 0) {
			i = i / 2
		} else {
			i--
		}
	}
	return f
};