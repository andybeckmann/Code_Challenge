/**
 * LeetCode: 1207 Unique Number of Occurrences
 * 
 * Description:
 *
 * Given an array of integers arr, write a function that returns true 
 * if and only if the number of occurrences of each value in the array 
 * is unique.
 *
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
	let n = 0,
		a = [],
		f = true
	for (let x=0; x<arr.length; x++) {
		n = 0
		for (let y=0; y<arr.length; y++) {
			if (arr[x] == arr[y]) {
				n += 1
			}
		}
		a.push([arr[x], n])
	}
	for (let i=0; i<a.length; i++) {
		for (let e=0; e<a.length; e++) {
			if (e != i) {
				if (a[i][0] == a[e][0]) {
					if (a[i][1] != a[e][1]) {
						f = false
					}
				} else if (a[i][1] == a[e][1]) {
					f = false
				}
			}
		}
	}
	return f
};