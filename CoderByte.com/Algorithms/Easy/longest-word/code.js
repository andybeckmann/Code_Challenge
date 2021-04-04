/**
 * CoderByte: Longest Word
 *
 * Descrioption:
 *
 * Have the function LongestWord(sen) take the sen 
 * parameter being passed and return the largest word 
 * in the string. If there are two or more words that 
 * are the same length, return the first word from 
 * the string with that length. Ignore punctuation 
 * and assume sen will not be empty.
 *
 * Use the Parameter Testing feature in the box below to 
 * test your code with different arguments.
 */
function LongestWord(sen) { 
	let f = '',
		t = ''
	for (let i=0; i<sen.length; i++) {
		if (sen[i].match(/[a-z]/i) != null || 
				sen[i].match(/[A-Z]/i) != null || 
				sen[i].match(/[0-9]/i) != null) {
			t = t + sen[i]
			if (i == sen.length - 1 && t.length > f.length) {
				f = t
				t = ''
			}
		} else if (t.length > f.length) {
			f = t
			t = ''
		} else {
			t = ''
		}
	}
	return f
}