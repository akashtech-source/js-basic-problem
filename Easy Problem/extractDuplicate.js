// 6. How would you extract the duplicate numbers in an array.
// Input: duplicate([1, 3, 6, 1, 9, 3, 6]) Output: [1, 2, 6]

const numbers = [1, 2, 3, 3, 5, 6, 7, 5, 9, 1];

const duplicate = numbers.filter(function (value, index, array) {
  return array.indexOf(value) !== index;
});
console.log(duplicate);
