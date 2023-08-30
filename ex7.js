//variables
//scope

//const vs. let

//const is used to indicate a variable should remain constant
//(meaning it never changes)

//let is used to indicate a variable that might change

//var also exists but is outdated and frowned up
//this is because var is GLOBALLY SCOPED


//the 'scope' of a variable is the section or block of code
//that the variable exists in and is accessible from

var myName = "Cody"; //globally scoped
//accessible EVERYWHERE in this code file

for (let i = 0; i < 5; i++){
  console.log(myName); // i = 5
}

if (myName.length < 6) {
  var firstLetter = myName[0];
  console.log(firstLetter);
}
//... a bunch of lines later

var streetName = "Market"
var firstLetter = streetName[0];

//student1

let message = "";

let student1 = "Mary";
if (student1[0] == "M") {
  // var message = "starts with M";
  message = "starts with M"
  console.log(message);
}

let student2 = "Jill";
if (student2[0] == "J") {
  // var message = "starts with J"
  message = "starts with J"
  console.log(message);
}


console.log("message is: ", message);

//avoid global variables being used inside of local blocks
//easiest way to do that is to avoid using var altogether

//but what if you do need a global variable
//create that variable with a let or const
//at the top of the file

const mikesMeal = 23.99;
const mikesDrinks = 24.00;
const juansMeal = 26.49;
const juansDrinks = 18.00;
const sheasMeal = 21.99;
const sheasDrinks = 10.00;

const mealsTotal =  mikesMeal + juansMeal + sheasMeal; 
//complete the line to calculate the total price for all of the meals

const drinksTotal = mikesDrinks + juansDrinks + sheasDrinks; 
//complete the line to calculate the total price for all of the meals

const subtotal = mealsTotal + drinksTotal;
//calculate the subtotal for the entire bill (both drinks and meals)

const tax = subtotal * 0.10;
//calculate the tax on the bill assuming a 10% tax rate

const tip = subtotal * 0.20;
//calculate what a 20% tip on the bill would be

const billTotal = subtotal + tax + tip;
//calculate the total due for the bill

const splitAmount = billTotal / 3;
//calculate how much each person pays if they decide to split the bill evenly

console.log("The total due is", billTotal.toFixed(2));
console.log("Split 3 ways is", splitAmount.toFixed(2), "each");