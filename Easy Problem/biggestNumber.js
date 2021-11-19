const arr = [12, 23, 122, 78, 1];
function biggestNumber(arr) {
  let largest = 0;
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    if (element > largest) {
      largest = element;
    }
  }
  return largest;
}
console.log(biggestNumber(arr));
