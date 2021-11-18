// 3. How can you order names of students in your class sequentially?
// Input: ["Farhan", "Nazmul", "Sykot", "Akash"] Output: ["Akash", "farhan", "Nazmul", "Sykot"]

function nameOrder(name) {
  const result = name.sort();
  return result;
}

console.log(nameOrder(["Farhan", "Nazmul", "Sykot", "Akash"]));
