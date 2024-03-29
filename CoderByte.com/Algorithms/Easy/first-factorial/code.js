/**
 * CoderByte: First Factorial
 *
 * Description:
 *
 * Have the function FirstFactorial(num) take the 
 * num parameter being passed and return the factorial 
 * of it. For example: if num = 4, then your program 
 * should return (4 * 3 * 2 * 1) = 24. For the test 
 * cases, the range will be between 1 and 18 and the 
 * input will always be an integer.
 *
 * Use the Parameter Testing feature in the box below 
 * to test your code with different arguments.
 */
function FirstFactorial(num) { 
	let f = num
	while (num > 1) {
		num--
		f = f * num
	}
	return f; 
}