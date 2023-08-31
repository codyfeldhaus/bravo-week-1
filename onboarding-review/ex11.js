
//strings are IMMUTABLE
let myName = "cody";



// myName[0] = "C";

myName = "C" + myName.slice(1); 

console.log(myName);

//arrays are MUTABLE
const colors = ["red", "blue", "green", "purple", "yellow"];

colors[2] = "black";

console.log("1", colors);

// colors = ["white", "brown", "black"];

let colorsSlice = colors.slice(2, 5);
console.log(colorsSlice);
