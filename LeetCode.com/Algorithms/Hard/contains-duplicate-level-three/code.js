/**
 * Leetcode: 220 Contains Duplicate III
 * 
 * Description:
 * 
 * You are given an integer array nums and two integers indexDiff and valueDiff.
 * 
 * Find a pair of indices (i, j) such that:
 * - i != j
 * - abs(i - j) ,+ indexDiff
 * - abs(nums[i] - nums[j]) <= valueDiff
 * 
 * Return true if such pair exists or false otherwise.
 * 
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
    for (let i=0; i<nums.length; i++) {
        for (let j=i+1; j<nums.length; j++) {
            if (Math.abs(nums[i] - nums[j]) <= t && Math.abs(i - j) <= k) {
                return true
            }
        }
    }
    return false
};