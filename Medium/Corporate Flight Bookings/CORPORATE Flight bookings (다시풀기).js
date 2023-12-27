/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings = function (bookings, n) {
  let times = new Array(n + 1).fill(0);
  for (let i = 0; i < bookings.length; i++) {
    const [start, end, human] = bookings[i];
    times[start - 1] += human;
    times[end] -= human;
  }
  for (let i = 1; i <= n; i++) {
    times[i] += times[i - 1];
  }
  console.log(times);
};

corpFlightBookings(
  [
    [1, 2, 10],
    [2, 3, 20],
    [2, 5, 25],
  ],
  5
);

corpFlightBookings(
  [
    [1, 2, 10],
    [2, 2, 15],
  ],
  2
);
