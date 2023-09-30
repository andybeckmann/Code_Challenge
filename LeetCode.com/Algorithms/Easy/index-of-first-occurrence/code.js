/**
 * Leetcode: 28 Find the Index of the First Occurrence in a String
 * 
 * Description:
 * 
 * Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
 * 
 * Constraints:
 * 
 * haystack and needle consist of only lowercase English characters.
 * 
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
	let m = false,
		f = 0;
	if (needle.length == 0) {
		return 0;
	} else {
		for (let x=0; x<haystack.length; x++) {
			if (haystack[x] == needle[0]) {
				for (let y=0; y<needle.length; y++) {
					if (haystack[x+y] == needle[y]) {
						if (y == needle.length - 1) {
							f = x;
							m = true;
							x = haystack.length;
						}
					} else {
						y = needle.length;
					}
				}
			}
		}
		if (m == false) {
			return -1;
		} else {
			return f;
		}
	}
};