/**
 * CoderByte: Codeland Username Validation
 *
 * Descrioption:
 *
 * Have the function CodelandUsernameValidation(str) take 
 * the str parameter being passed and determine if the string 
 * is a valid username according to the following rules:
 *
 * 1. The username is between 4 and 25 characters.
 * 2. It must start with a letter.
 * 3. It can only contain letters, numbers, and the underscore 
 * character.
 * 4. It cannot end with an underscore character.
 * 
 * If the username is valid then your program should return the 
 * string true, otherwise return the string false.
 *
 * Use the Parameter Testing feature in the box below to test 
 * your code with different arguments.
 */
function CodelandUsernameValidation(str) { 
	let v = false
	if (str.length < 4 || 
		str.length > 25 || 
		str[str.length - 1] == '_' || 
		str[0].match(/[a-z]/i) == null) {
		return false
	} else {
		for (let i=0; i<str.length; i++) {
			if (str[i].match(/[a-z]/i) != null || 
					str[i].match(/[A-Z]/i) != null ||
					str[i].match(/[0-9]/i) != null || 
					str[i] == '_') {
				v = true
			} else {
				v = false
			}
		}
		if (v == true) {
			return true
		} else {
			return false
		}
	}
}