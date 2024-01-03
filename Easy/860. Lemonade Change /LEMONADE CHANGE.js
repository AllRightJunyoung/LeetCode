/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  let obj = { 5: 0, 10: 0 };
  for (let i = 0; i < bills.length; i++) {
    const bill = bills[i];
    if (bill === 5) { 
      obj[bill] += 1;
    } else if (bill === 10) {
      if (obj[5] > 0) {
        obj[5] -= 1;
        obj[10] += 1;
      } else {
        return false;
      }
    } else {
      if (obj[5] > 0) {
        if (obj[10] > 0) {
          obj[5] -= 1;
          obj[10] -= 1;
        } else {
          if (obj[5] >= 3) {
            obj[5] -= 3;
          } else {
            return false;
          }
        }
      } else {
        return false;
      }
    }
  }
  return true;
};

console.log(lemonadeChange([5, 5, 10, 20, 5, 5, 5, 5, 5, 5, 5, 5, 5, 10, 5, 5, 20, 5, 20, 5]));
console.log(lemonadeChange([5, 5, 5, 10, 20]));
console.log(lemonadeChange([5, 5, 10, 10, 20]));
