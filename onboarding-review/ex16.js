let countdown = 10;

// while (countdown >= 0) {
//     console.log(`The current number is ${countdown}`);
//     countdown--; //decrements countdown, i.e. subtracts 1 from it
// }

// console.log("The countdown is done!");

//this for loop accomplishes the same thing as the 
//above while loop
// for (let i = 10; i >= 0; i--) {
//   console.log(`The current number is ${i}`);
// }

/*Siobhan needs your help with her word game again. Now she needs to take a word and replace all of the i's in it with underscores ( _ ). The code below will accomplish this with a while loop. */
let word = "ixixixixixixixixixix"

// let word = word.replaceAll("i", "_")

// while(word.includes("i")) { //condition is true as long as word contains i
//     word = word.replace("i", "_"); 
//     console.log(word);
//     //replaces the first i it finds with an underscore and the sets word equal to replaced version
// }

// console.log(`After the loop completes, word is now ${word}`);

/*Given an array of numbers, remove numbers from the end of the array until it's empty. 
With each number, if it's bigger than 100 log  that it's a big number to the console. 
Otherwise log that it's a small number to the console.*/

let numArray = [45, 234, 93, 2, 457, 982, 99, 1000, 21, 19]

// //we want to continue until the list is empty. An empty list has a length of 0. Use this fact to fill in the required condition
// while (numArray.length > 0) {
//     let removedNum =  numArray.pop();//use the pop method to remove the number at the end of the list and store it in a new variable
   
//     //now you need to check if the number is big (over 100)
//     if (removedNum > 100) {
//         console.log(`${removedNum} is a big number`);
//     } else {
//         console.log(`${removedNum} is a small number`);
//     }

//     console.log(numArray);
// }
// console.log("The loop is done!") //will only run once the loop has finished


// Exercise: Calculate compound interest using a while loop

const principal = 1000; // initial amount
const annualInterestRate = 0.05; // annual interest rate (5%)
const years = 20; // number of years

let balance = principal;
let year = 1;

while (year <= years) {
  const interest = balance * annualInterestRate;
  balance += interest;

  console.log(`Year ${year}: Balance = $${balance.toFixed(2)}`);
  year++;
}


