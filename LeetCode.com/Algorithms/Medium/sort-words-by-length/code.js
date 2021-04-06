/**
 * LeetCode: 1451 Rearrange Words in a Sentence
 *
 * Description:
 *
 * Given a sentence text (A sentence is a string 
 * of space-separated words) in the following 
 * format:
 * 
 * - First letter is in upper case.
 * - Each word in text are separated by a single 
 * space.
 * - Your task is to rearrange the words in text 
 * such that all words are rearranged in an 
 * increasing order of their lengths. If two 
 * words have the same length, arrange them in 
 * their original order.
 * 
 * Return the new text following the format shown 
 * above.
 *
 * Constraints:
 * 
 * - text begins with a capital letter and then 
 * contains lowercase letters and single space 
 * between words.
 * - 1 <= text.length <= 10^5
 *
 * @param {string} text
 * @return {string}
 */
var arrangeWords = function(text) {
	let a = text.split(' '),
		m = 0
		t = [],
		f = []
	for (let i=0; i<a.length; i++) {
		if (a[i].length > m) {
			m = a[i].length
		}
	}
	for (let x=0; x<a.length + m; x++) {
		for (let y=0; y<a.length; y++) {
			if (a[y].length == x) {
				f.push(a[y].toLowerCase())
			}
		}
	}
	t = f[0].split('')
	t[0] = t[0].toUpperCase()
	f[0] = t.toString().replace(/,/g, '')
	return f.join(' ')
};