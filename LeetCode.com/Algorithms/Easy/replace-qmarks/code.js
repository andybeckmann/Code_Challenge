/**
 * LeetCode: 1576 Replace All ?'s to Avoid Consecutive Repeating Characters
 *
 * Description:
 *
 * Given a string s containing only lower case English letters and the '?' 
 * character, convert all the '?' characters into lower case letters such 
 * that the final string does not contain any consecutive repeating 
 * characters. You cannot modify the non '?' characters.
 *
 * It is guaranteed that there are no consecutive repeating characters in 
 * the given string except for '?'. 
 *
 * Return the final string after all the conversions (possibly zero) have 
 * been made. If there is more than one solution, return any of them. 
 * It can be shown that an answer is always possible with the given constraints.
 *
 * Constraints:
 *
 * 1 <= s.length <= 100
 * s contains only lower case English letters and '?'.
 *
 * @param {string} s
 * @return {string}
 */
var modifyString = function(s) {
	let a =['a','b','c','d','e','f',
			'g','h','i','j','k','l',
			'm','n','o','p','q','r',
			's','t','u','v','w','x',
			'y','z'],
		  f = []
	for (let x=0; x<s.length; x++) {
		if (s[x] != '?') {
			f.push(s[x])
		} else {
			for (let y=0; y<a.length; y++) {
				if (s[x-1] != a[y] && s[x+1] != a[y] && s[x] != a[y]) {
					f.push(a[y])
					a.shift()
					a.push(f[f.length - 1])
					y = a.length + 1
				} 
				a.shift()
				a.push(f[f.length - 1])
			}
		}
	}
	return f.join('')
};