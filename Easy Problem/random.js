// Write a function that can print any random number between any two given numbers (Include them).

// Input: random(1, 6) Output: 1 or 2 or 3 or 4 or 5 or 6

// METHOD 1.

function random(min, max) {
  const result = Math.floor(Math.random() * (max - min) + min);
  return result;
}

console.log(random(1, 6));

// METHOD 2

// function getRandom(num) {
//   const number = Math.floor(Math.random() * num) + 1;
//   return number;
// }
// console.log(getRandom(6));
