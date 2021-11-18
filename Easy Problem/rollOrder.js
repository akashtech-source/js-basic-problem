// 2. How can you order roll numbers of students in your class sequentially?
// Input: [5, 4, 6, 9] Output: [4, 5, 6, 9]

function rollOrder(num) {
  const result = num.sort();
  return result;
}
console.log(rollOrder([5, 4, 6, 9]));
