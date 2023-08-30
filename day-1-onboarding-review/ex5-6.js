console.log("dog" == "dog"); // ==, true
console.log(6 > 10); // >, false
console.log(10 <= 9); // <=, false
console.log(4 != 3); // !=, true

//=== vs ==
//== checks if two things are equal in value
//=== checks if they are both equal in value and the same type

let x = "5";

if (x === "5") {
  console.log("these are equal in value");
} else {
  console.log("these are not the same");
}