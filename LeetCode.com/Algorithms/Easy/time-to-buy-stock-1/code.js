/**
 * LeetCode: 121 Best Time to Buy and Sell Stock
 *
 * Description:
 *
 * You are given an array prices where prices[i] 
 * is the price of a given stock on the ith day.
 *
 * You want to maximize your profit by choosing a 
 * single day to buy one stock and choosing a 
 * different day in the future to sell that stock.
 *
 * Return the maximum profit you can achieve from 
 * this transaction. If you cannot achieve any 
 * profit, return 0.
 *
 * Constraints:
 *
 * 1 <= prices.length <= 10^5
 * 0 <= prices[i] <= 10^4
 *
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
	let f = 0,
		m = prices[0]
	for (let i=1; i<prices.length; i++) {
		if (m > prices[i]) {
			m = prices[i]
		}
		if (f < prices[i] - m) {
			f = prices[i] - m
		}
	}
	return f
};