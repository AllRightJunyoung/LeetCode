/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    prices.unshift(0)
    let dp=new Array(prices.length+1).fill(0)
    
};
maxProfit([1,2,3,0,2])