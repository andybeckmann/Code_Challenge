/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
	if (x != 0) {
		let ix = x / (Math.abs(x))
		let sx = x.toString()
		let ra = []
		let rx = ''
		for (let i=0; i<sx.length; i++) {
			ra.push(sx[sx.length - 1 - i])
		}
		rx = ra.toString();
		let fs = rx.replace(/,/g, '')
		let fn = parseInt(rx.replace(/,/g, ''), 10)
		if (fn > 2147483648 || fn < -2147483648) {
			return 0
		} else {
			return fn * ix;
		}
	} else {
		return 0
	}
};