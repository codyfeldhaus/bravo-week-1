/*
You're going to build a vowel counter. 
Given a string, count and print out the number of vowels in the string. 
For the purpose of this assignment, we will not consider y to be a vowel.
 
Example input: "Do you know where the mall is?"

Example output:
Number of vowels: 9
*/

//HINT: The string 'aeiou' has been provided for you if you 
//think it might be helpful. You might want to look into what
//the 'includes' method does and how it might be useful here.

const text = "Hello, how are you today? Enjoy your stay!";
const vowels = "aeiou";

//add your code below

//define a variable to keep track of the count
let vowelCount = 0;

//iterate through each character in the string
for (let i = 0; i < text.length; i++) {
  //store the lowercase version of each character in a variable
  let character = text[i].toLowerCase();

  //check if the character is a vowel
  if (vowels.includes(character)) {
    //increment the vowel count (increase it by 1)
    vowelCount++;
  }
}
//log out a sentence indicating the number of vowels
console.log("Number of vowels:", vowelCount);