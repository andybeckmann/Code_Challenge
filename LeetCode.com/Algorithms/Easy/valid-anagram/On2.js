/**
 * LeetCode: 242 Valid Anagram - O(n^2)
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
		let sArray = s.split(''),
			tArray = t.split('')
		let m = []
		for (let i=0; i<sArray.length; i++) {
			for (let e=0; e<tArray.length; e++) {
				if (sArray[i] == tArray[e]) {
					m.push(sArray[i])
					tArray[e] = '0'
					e = tArray.length
				}
			}
		}
		if (m.length == s.length) {
			return true
		} else {
			return false
		}
	}
};