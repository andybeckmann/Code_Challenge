/**
 * LeetCode: 122 Best Time to Buy and Sell Stock II
 *
 * Description: 
 *
 * You are given an array prices where prices[i] is 
 * the price of a given stock on the ith day.
 *
 * Find the maximum profit you can achieve. You may 
 * complete as many transactions as you like (i.e., 
 * buy one and sell one share of the stock multiple 
 * times).
 *
 * Note: You may not engage in multiple transactions 
 * simultaneously (i.e., you must sell the stock 
 * before you buy again).
 *
 * Constraints
 * 
 * 1 <= prices.length <= 3 * 10^4
 * 0 <= prices[i] <= 10^4
 *
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
	let a = [],
		f = 0
	for (let x=0; x<prices.length; x++) {
		for (let y=0; y<prices.length; y++) {
			if (x < y && prices[x] < prices[y] && prices[x + 1] > prices[x]) {
				f = f + (prices[y] - prices[x])
				y = prices.length 
			}
		}
	}
	return f
};