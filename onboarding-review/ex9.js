//string indexing

let myString = "California"

let lastLetter;

// let firstLetter = myString[0];

let firstLetter = myString.charAt(0);

// console.log(firstLetter);

//last letter

lastLetter = myString.charAt(myString.length - 1)

lastLetter = myString.at(-2)

// console.log(lastLetter);

const fullString = "SOFTWARE DEV";

const vanityLetter1 = fullString.charAt(0);//your code here
const vanityLetter2 = fullString.charAt(2)
const vanityLetter3 = fullString[3]; //use this as an example
const vanityLetter4 = fullString[4];
const vanityLetter5 = fullString[6];
const vanityLetter6 = fullString[9];
const vanityLetter7 = fullString[11];


//SFTWRDV
const vanityPlate = (vanityLetter1 + vanityLetter2 + vanityLetter3 +
                    vanityLetter4 + vanityLetter5 + vanityLetter6 + 
                    vanityLetter7);

console.log(`The new vanity plate is ${vanityPlate}`);



// let spaces = ""
// console.log(spaces.length)

for (let i = 1; i <= 7; i++) {
  console.log("vanityLetter" + i);
}