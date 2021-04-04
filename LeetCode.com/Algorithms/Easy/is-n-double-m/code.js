/**
 * LeetCode: 1346 Check if N and Its Double Exist
 *
 * Description:
 *
 * Given an array arr of integers, check if there 
 * exists two integers N and M such that N is the 
 * double of M ( i.e. N = 2 * M).
 * 
 * More formally check if there exists two indices 
 * i and j such that:
 * 
 * - i != j
 * - 0 <= i, j < arr.length
 * - arr[i] == 2 * arr[j]
 *
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
	let f = false,
		z = 0
	for (let x=0; x<arr.length; x++) {
		for (let y=1; y<arr.length; y++) {
			if (arr[x] / arr[y] == 2 || arr[y] / arr[x] == 2) {
				f = true
			}
		}
		if (arr[x] == 0) {
			z += 1
		}
	}
	if (z > 1) {
		return true
	} else {
		return f
	}
};