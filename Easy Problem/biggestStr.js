// How to find a biggest string from an array?

function longestString(names) {
  let longestWord = "";
  for (name of names) {
    console.log(name);
    if (name.length > longestWord.length) {
      longestWord = name;
    }
  }
  return longestWord;
}

console.log(
  longestString(["Farhan Ahmed", "Farhan", "United Republic of America"])
);
