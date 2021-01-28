/**
 * LeetCode: 1431 Kids With the Greatest Number of Candies
 * 
 * Description:
 *
 * Given the array candies and the integer extraCandies, 
 * where candies[i] represents the number of candies that 
 * the ith kid has.
 *
 * For each kid check if there is a way to distribute 
 * extraCandies among the kids such that he or she can 
 * have the greatest number of candies among them.
 * 
 * Constraints:
 * 
 * 2 <= candies.length <= 100
 * 1 <= candies[i] <= 100
 * 1 <= extraCandies <= 50
 *
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
	let h = 0,
		f = []
	for (let i=0; i<candies.length; i++) {
		if (candies[i] > h) {
			h = candies[i]
		}
	}
	for(let e=0; e<candies.length; e++) {
		if (candies[e] + extraCandies >= h) {
			f.push(true)
		} else {
			f.push(false)
		}
	}
	return f
};