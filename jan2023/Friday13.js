// Find the number of Friday 13th in the given year.

// Input: Year in Gregorian calendar as integer.

// Output: Number of Black Fridays in the year as an integer.
function unluckyDays(year) {
  let unlucky = 0;
  for (let i = 0; i < 12; i++) {
    if (new Date(year, i, 13).getDay() === 5) {
      unlucky++;
    }
  }
  return unlucky;
}
