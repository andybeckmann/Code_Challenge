/**
 * LeetCode: 1688 Count of Matches in Tournament
 * 
 * Description:
 * 
 * You are given an integer n, the number of teams in a 
 * tournament that has strange rules:
 *
 * If the current number of teams is even, each team 
 * gets paired with another team. A total of n / 2 
 * matches are played, and n / 2 teams advance to the 
 * next round.
 * 
 * If the current number of teams is odd, one team 
 * randomly advances in the tournament, and the rest 
 * gets paired. A total of (n - 1) / 2 matches are 
 * played, and (n - 1) / 2 + 1 teams advance to the 
 * next round.
 *
 * Return the number of matches played in the tournament 
 * until a winner is decided.
 * 
 * Constraints:
 *
 * 1 <= n <= 200
 * 
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