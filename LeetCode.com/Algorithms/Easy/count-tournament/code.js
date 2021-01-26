/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) {
    if (n > 1 && n <= 200 && n != 2) {
        let t = 0
        if (n % 2 == 0) {
            for (let i=n; i / 2 > 1; i) {
                t += i / 2
                i = i / 2
            }
            return Math.floor(t) + 1
        } else {
            for (let i=n; (i - 1) / 2 + 1 > 1; i) {
                t += (i - 1) / 2
                i = (i - 1) / 2 + 1
            }
            return Math.ceil(t)
        }
    } else if (n == 2) {
        return 1
    } else {
        return 0 
    }
};