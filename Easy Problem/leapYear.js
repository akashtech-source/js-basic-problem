// 4. Write a function that can tell us whether an year is leap year or not.
// input: leapYear(2026) Output: "Not a leap year"

function leapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(`${year} is leap year`);
  } else {
    console.log(`${year} is not a leap year`);
  }
}
const year = 2028;
leapYear(year);
