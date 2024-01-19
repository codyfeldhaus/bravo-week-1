//a function allows you to group together and name
//multiple lines of code so that you can more easily
//run them all at once whenever you need to just by
//'calling' the function with its name

//standard function syntax

/*
1. function keyword
2. name of the function
3. parentheses
4. any parameters inside the parentheses (optional)
5. function block inside {} to define what code to run

function myFunction(parameter1, parameter2) {
  //all of my code to execute goes 
  //inside these brackets
}
*/

//array.pop()

//string.includes("x")

function simpleGreeting() {
  console.log("Welcome to our company!");
  console.log("Have a nice day!");
}

//parameter-less function

function cheerfulGreeting() {
  console.log("Hello!");
  simpleGreeting();
}

//need to call (invoke) the function before anything happens
// greeting(); 
// cheerfulGreeting();

//single parameter function
function greetByName(theirName) {
  console.log(`Hello, ${theirName}!`);
  simpleGreeting();
}

// greetByName("Steve");

//calling a function within a loop
let visitors = ["Abby", "Brian", "Carla", "Dennis", "Edgar"];

// dont care about i value, so use for...of loop
// for (let visitor of visitors) {
//   greetByName(visitor);
// }

//you can call functions inside of other functions, see above

//multi-parameter functions
function calculateSqFt(length, width) {
  let sqft = length * width;
  console.log(`The square footage for a ${length} by ${width} room is ${sqft}.`)
  return sqft;
}
//return allows us to store the final value of a function in a variable

// let bedroom1 = calculateSqFt(13, 7.5);
// let bedroom2 = calculateSqFt(12, 11);
// let livingRoom = calculateSqFt(16, 11);

// let totalSqft = bedroom1 + bedroom2 + livingRoom;

// console.log("The total square footage for this house is " + totalSqft);

//if we want our functions to give us back their final result, we use a return statement
//functions automatically stop running when they reach their return

//Scenario: Given a list of numbers, have to determine which is the largest.
//Can only see one number at a time, but we are allowed to 'write things down'
//Can only make one comparison at a time (eg. 'Is a bigger than b', not 'is a, b, c, or d bigger')
// [X, X, X, X, X, X, X, X, X, X, X, X]

let numbers = [5, 7, 10, 12, -3, 4, 100, 32, 99, 567, 83, 201]
//pseudocode

//keep track of the largest number so far
//first number automatically largest number so far
let smallestNum = numbers[0];

//looping through the array
//is the next number bigger than the current largest number?
for (let num of numbers) {
  //is the next number bigger than the current largest number?
  if (num < smallestNum) {
    //if it is, then the number is the largest number
    smallestNum = num;
  }
}

// console.log("The largest number in the array is", smallestNum);
  

  //if its not, then the original largest number is still the largest number


//now lets put it into a function
function maxNumOfArr(numArr) {
  //create variable to store largestNum, initially set equal to first number
  let largestNum = numArr[0];

  //loop through the array
  for (let num of numArr) {
    //check if the current num is bigger than the largestNum
    if (num > largestNum) {
      //if it is, then set largestNum to the current num
      largestNum = num;
    }
  }
  //log out the result
  console.log("The largest number in the array is", largestNum);
  //return the largestNum
  return largestNum;
}

let numbers1 = [5, 7, 11, -3, 2];
let numbers2 = [4, 8, 10, 11, -5, 17, 0, 3];
let numbers3 = [1, 1, 1, 7, 7, 9, 2];

let max1 = maxNumOfArr(numbers1);
let max2 = maxNumOfArr(numbers2);
let max3 = maxNumOfArr(numbers3);

console.log("the three max numbers are", max1, max2, max3);