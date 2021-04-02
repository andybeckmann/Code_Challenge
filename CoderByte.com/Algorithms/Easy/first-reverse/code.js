/**
 * CoderByte: First Reverse
 *
 * Description: 
 *
 * Have the function FirstReverse(str) take the str parameter 
 * being passed and return the string in reversed order. 
 *
 * For example: if the input string is "Hello World and Coders" 
 * then your program should return the string sredoC dna 
 * dlroW olleH.
 *
 */
function FirstReverse(str) { 
	let f = ''
	for (let i=0; i<str.length; i++) {
		f = f + str[str.length - 1 - i]
	}
	return f; 
}