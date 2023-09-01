// for loops

// for (let i = 1; i < 5; i += 2) {
//   console.log(`Now we're on number ${i}`);
// }

/*

for (ITERATOR, CONTINUATION CONDITION, ITERATOR CHANGE) {
   //whatever code you want to run each time
}

 */

// const drinksMenu = ["soda", "tea", "coffee", "juice", "milk", "water"]

// console.log("Welcome in! Here are your drink options:");

// //for...in loop
// for (let i in drinksMenu) {
//     console.log(drinksMenu[i]);
// }

//for...of loop

// //PREFERRED over for...in
// //for (eachElement of array)
// for (let drink of drinksMenu) {
//   console.log(drink);
// }


//Write a loop that displays the square and the cube of each integer from 0 up to 5, inclusive
//Remember the exponentiation operator **

// for (let i = 0; i <= 5; i++) {
//   let square = i ** 2; //** is exponent operator
//   let cube = i ** 3; //your code here

//   console.log(`The square of ${i} is ${square}`);
//   //your code here for second console.log() statement
//   console.log(`The cube of ${i} is ${cube}`);

// }

//array of products for sale
//our system can only store the first 5 letters of a product name
//loop through the array and log out just the first 5 letters of each item

let inventory = ["television", "refrigerator", "bed", "oven", "dishwasher"]

// //loop through each item of the inventory array
// for (let eachProduct of inventory) {
//   //store the first five letters in a variable
//   console.log("eachProduct is", eachProduct);
//   let firstFive = eachProduct.slice(0, 5);
//   //log out the first five letters
//   console.log("firstFive is", firstFive);
// }

// let x = "bed"
// console.log(x[5]);

let ulOpen = "<ul>";
let ulClose = "</ul>";

let finalString = "";

let listItems = ["apple", "banana", "carrot"];

for (let item of listItems) {
  let liString = `<li>${item}</li>`
  console.log(liString);
  
  finalString += liString;
  console.log(finalString);
}

let finalUl = ulOpen + finalString + ulClose;
console.log(finalUl);