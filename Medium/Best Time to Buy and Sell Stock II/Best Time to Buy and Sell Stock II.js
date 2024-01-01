/**
 * @param {number[]} prices
 * @return {number}
 */

// 현재 가격이 이전가격보다 큰경우 계속 이익을 낼수있음
var maxProfit = function (prices) {
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      profit += prices[i] - prices[i - 1];
    }
  }
  return profit;
};

maxProfit([7, 1, 5, 3, 6, 4]);
maxProfit([1, 2, 3, 4, 5]);
