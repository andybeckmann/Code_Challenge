/**
 * LeetCode: 1672 Richest Customer Wealth
 *
 * Description:
 *
 * You are given an m x n integer grid accounts where accounts[i][j] 
 * is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. 
 * Return the wealth that the richest customer has.
 *
 * A customer's wealth is the amount of money they have in all their bank 
 * accounts. The richest customer is the customer that has the maximum wealth.
 *
 * Constraints:
 * 
 * m == accounts.length
 * n == accounts[i].length
 * 1 <= m, n <= 50
 * 1 <= accounts[i][j] <= 100
 *
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
	if (accounts.length < 1) {
		return 0;
	} else {
		let t = null,
			f = []
		for (let i=0; i<accounts.length; i++) {
			if (Number(accounts[i]).length > 50) {
				t = 0;
			} else {
				for (let e=0; e<accounts[i].length; e++) {
					if (accounts[i][e] < 1 || accounts[i][e] > 100) {
						t = 0
					} else {
						t += accounts[i][e];
						if (e == accounts[i].length - 1) {
							f.push(t);
							t = 0
						}
					}
				}
			}
		}
		let a = 0;
		for (let x=0; x<f.length; x++) {
			if (Number(f[x]) > a) {
				a = Number(f[x])
			}
		}
		return a
	}
};