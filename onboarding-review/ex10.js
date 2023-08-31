let myName = "Cody Feldhaus" //'cody feldhaus'

//first 3 letters


//start at 0, stop just before 3
let firstLetter = myName.slice(0, 3);

// console.log(firstLetter);

//you don't have to give it an end
//if you only give it one value, it will assume that is the start
//and then automatically go to the end

let mySlice = myName.slice(6);

// console.log(mySlice);

//where is the F in my name?
// let indexOfF = myName.toLowerCase().indexOf("f");

let lowerCaseName = myName.toLowerCase()
let indexOfF = lowerCaseName.indexOf("f");

// console.log(indexOfF);

//5 * [3 - (2 + 4)]
//5 * [3 - 6]
//5 * -3
//-15

// let sentence = "I have 3 dogs"
// console.log(sentence.indexOf("have"));

// let legal = "I saw Stephanie take the keys from Stephanie's mother"

// let replacedString = legal.replaceAll("Stephanie", "XXXX");

// console.log(replacedString);

// let directions = "Turn right after you leave our house, call our phone, and drive for half an hour..."
// let newDirections = directions.replaceAll(" our ", " their ");

// console.log(newDirections);

/*Based on a given user email address, perform the following tasks:
*Create a username for the user that is the email address up to (but not including) the @ symbol. 
*Create a new email for the user that replaces their old domain with 'eaglecorps.com'.
*Create a temporary password for the user that is the first five letters of their username followed by the length of their original email address.*/

const emailAddress = "johnnysmith@gmail.com";

const emailLength = emailAddress.length; // access the length property of emailAddress
console.log(`The length of the email address is ${emailLength} characters.`);

const indexOfAt = emailAddress.indexOf("@"); // use a string method to determine the index of the @ symbol in emailAddress
console.log(`The @ symbol is at position ${indexOfAt}`);

const username = emailAddress.slice(0, indexOfAt); // use the indexOfAt variable you defined above along with a string method to create a username as described in the starting comments
console.log(`The new username is ${username}`);


// The oldDomain code has been provided for you, just make sure you understand what it’s doing
const oldDomain = emailAddress.slice(indexOfAt + 1) //if the @ symbol is at position n, then the old domain starts at position n+1 and goes to the end of the string.  
console.log(`The old domain was ${oldDomain}`);

//use a string method and the oldDomain and newDomain variables to create the new email address as described in the starting comments
const newDomain = "eaglecorps.com";
// const newEmailAddress = `${username}@${newDomain}`;
const newEmailAddress = username + "@" + newDomain

console.log(`The new email address is ${newEmailAddress}`);

// const firstFive = username.slice(0, 5);
const tempPassword = username.slice(0, 5) + emailLength//use string methods and either concatenation or interpolation to generate the temporary password as described in the starting comments, you might find it useful to create another variable above this line to do this
console.log(`The user’s temporary password is ${tempPassword}`);