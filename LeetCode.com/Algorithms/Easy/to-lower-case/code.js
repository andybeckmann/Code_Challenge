/**
 * LeetCode: 709 To Lower Case
 *
 * Description:
 *
 * Implement function ToLowerCase() that has a string parameter 
 * str, and returns the same string in lowercase.
 *
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
	let l = 'abcdefghijklmnopqrstuvwxyz'.split(''),
		u = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
		s = true,
		m = []
	for (let i=0; i<str.length; i++) {
		for (let x=0; x<l.length; x++) {
			if (str[i] == l[x] || str[i] == u[x]) {
				m.push(l[x])
			}
		}
		for (let y=0; y<l.length; y++) {
			if (str[i] == l[y] || str[i] == u[y]) {
				s = false
				y = l.length
			} else {
				s = true
			}
		}
		if (s == true) {
			m.push(str[i])
		}
	}
	let f = m.join('')
	return f
};