/**
 * LeetCodxe: 387 First Unique Character in a String
 *
 * Description:
 *
 * Given a string, find the first non-repeating character 
 * in it and return its index. If it doesn't exist, 
 * return -1.
 *
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
	if (s.length == 0) {
		return -1
	} else {
		let m = false,
			a = []
		for (let x=0; x<s.length; x++) {
			m = false
			for (let y=0; y<s.length; y++) {
				if (x != y && s[x] == s[y]) {
					m = true
					y = s.length
				}
			}
			if (m == false) {
				a.push(x)
			}
		}
		if (a[0] == undefined) {
			return -1
		} else {
			return a[0]
		}
	}
};