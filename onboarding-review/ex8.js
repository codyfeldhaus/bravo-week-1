//string interpolation (and concatenation)

let firstName = "Cody"//add your first name
let lastName = "Feldhaus"//add your last name
const fullNameConcat = lastName + ", " + firstName;
//create your full name from the first two variables using concatenation 

// console.log(fullNameConcat);

const fullNameInterp = `${lastName}, ${firstName}`;
//create your full name from the first two variables using interpolation

// console.log(fullNameInterp);

// //don't change the following line, checks to see that concatenation and interpolation gave results
// console.log("Are your fullNameConcat and fullNameInterp variables equal?")
// console.log(fullNameConcat == fullNameInterp); 

let myAge = 31//add your age
let faveFood = "sandwiches" //add your favorite food
let faveColor = "purple" //add your favorite color
let miniBio = `My name is ${firstName} ${lastName}. I am ${myAge} and I like ${faveFood} and ${faveColor}.`//use string interpolation to create summary that includes your full name, age, favorite food, and favorite color
console.log(`Your mini bio is: ${miniBio}`);
// console.log(miniBio);

