/**
 * CodeWars: List Filtering
 *
 * Description:
 *
 * In this kata you will create a function that takes a list 
 * of non-negative integers and strings and returns a new 
 * list with the strings filtered out.
 * 
 */
function filter_list(l) {
	let f = [],
		t = ''
	for (let i=0; i<l.length; i++) {
		if (l[i].toString().match(/[0-9]/i) != null && Number.isInteger(l[i]) == true) {
			f.push(l[i])
		} 
	}
	return f
}