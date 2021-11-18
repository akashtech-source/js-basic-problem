// 5. How would you determine the number of vowels in a sentence.
// Input: vowel("I love javascript") Output: Number of vowles is 6

const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

function vowelCheck(sentence) {
  let count = 0;
  const letters = Array.from(sentence);
  letters.forEach(function (value, index, array) {
    if (vowels.includes(value)) {
      count++;
    }
  });
  return count;
}

console.log(vowelCheck("I Love javascript"));
