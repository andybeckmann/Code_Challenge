/**
 * LeetCode: 242 Valid Anagram - O(n)
 *
 * Description:
 *
 * Given two strings s and t , write a 
 * function to determine if t is an 
 * anagram of s.
 *
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
	if (s.length != t.length) {
		return false 
	} else {
		let sm = {},
			tm = {}
		for (let x of s) {
			sm[x] = sm[x] + 1 || 1
		}
		for (let y of t) {
			tm[y] = tm[y] + 1 || 1
		}
		for (let z in sm) {
			if (sm[z] !== tm[z]) {
				return false
			}
		}
		return true
	}
};