/**
 * LeetCode: 1108 Defanging an IP Address
 *
 * Description:
 *
 * Given a valid (IPv4) IP address, return a defanged 
 * version of that IP address.
 * 
 * A defanged IP address replaces every period "." with 
 * "[.]".
 *
 * Constraints:
 *
 * The given address is a valid IPv4 address.
 *
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
	let f = ''
	for (let i=0; i<address.length; i++) {
		if (address[i] == '.') {
			f = f + '[.]'
		} else {
			f = f + address[i]
		}
	}
	return f
};