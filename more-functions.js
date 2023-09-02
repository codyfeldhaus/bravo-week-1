//Additional exercises to practice functions

//1. Create a function named "calculate" that takes three parameters: 
//two numbers and a string representing an arithmetic operation (+, -, *, /). 
//The function should perform the specified operation on the two numbers and return the result.

//function signature:
function calculate(num1, num2, operator) {
  if (operator == "+") {
    return num1 + num2;
  } 

  else if (operator == "-") {
    return num1 - num2;
  } 
  
  else if (operator == "*") {
    return num1 * num2;
  } 
  
  else {
    if (operator == "/") {
      return num1 / num2;
    }
  }
}
  
//Test: Uncomment the following four lines before running your code. Verify the results.
// console.log(calculate(10, 5, '+') == 15) //true
// console.log(calculate(10, 3, '+') == 13) //true
// console.log(calculate(-5, -10, '-') == 5) //true
// console.log(calculate(5, 0, "*") == 5) //false




//2. Create a function named "reverseString" that takes two parameters:
//a string containing only letters and spaces (no punctuation or special characters),
//and a boolean indicating whether or not you should preserve capitalization
//and returns a reversed version of that string
//"Hello" -> "olleH"
//"New York" -> "kroy wen"

function reverseString(myString, presCap) {
  if (!presCap) {
    myString = myString.toLowerCase(); //converts string to lowercase and resaves as myString
  } 

  let reversedString = ""; //'arcs'

//with loops often helpful to think about the middle step rather than the first or last steps
  for (let i = 0; i < myString.length; i++) {
    let letter = myString.charAt(i);
    reversedString = letter + reversedString; //"b" + "arcs" -> "barcs"
    // console.log("reversedString currently: ", reversedString);
    // reversedString = myString.charAt(i) + reversedString; //could be done with one line
  }

  return reversedString;

}

/*
original string: SXXXXXXX
reversed string: E+L+B+B+A+R+C+S -> ELBBARCS
 */

//Test: Uncomment the following three lines before running your code. Verify the results.
// console.log(reverseString("Alan Turing", true) == "gniruT nalA"); //true
// console.log(reverseString("California", false) == "ainrofilac"); //true
// console.log(reverseString("Racecar", true) == "racecar"); //false

//tacocat -> tacocat



//3. Write a function named "isPalindrome" that takes a string as input 
//and returns true if the string is a palindrome (reads the same forwards and backwards), 
//and false otherwise. You can assume your string will only contain letters and spaces.
//You can ignore capitalization (e.g. "Racecar" should be considered a palindrome)
//and also ignore spaces (e.g. "taco cat" should be considered a palindrome).
//Consider how your reverseString function above can be used!

function isPalindrome(myString) { //madam, hello
  //'clean' myString by replacing all spaces with empty string and converting it to lowercase
  myString = myString.replaceAll(" ", "").toLowerCase();

  //create a variable to store the result of calling reverseString on myString
  //pass in false to reverseString because we don't want to care about capitalization
  let myStringReverse = reverseString(myString, false); //madam, olleh
  
  //check if reversed string is equal to original
  if (myStringReverse == myString) {
    //if so, return true
    return true;
  } else {
    //if not, return false
    return false;
  }
}

//slightly simpler version
// function isPalindrome(myString) { //madam, hello
//   //'clean' myString by replacing all spaces with empty string and converting it to lowercase
//   myString = myString.replaceAll(" ", "").toLowerCase();

//   //create a variable to store the result of calling reverseString on myString
//   //pass in false to reverseString because we don't want to care about capitalization
//   let myStringReverse = reverseString(myString, false); //madam, olleh
  
//   //check if reversed string is equal to original
//   if (myStringReverse == myString) {
//     //if so, return true
//     return true;
//   } 
//   //if not, return false
//   return false;
  
// }

// even more simple version
// function isPalindrome(myString) { //madam, hello
//   //'clean' myString by replacing all spaces with empty string and converting it to lowercase
//   myString = myString.replaceAll(" ", "").toLowerCase();

//   //create a variable to store the result of calling reverseString on myString
//   //pass in false to reverseString because we don't want to care about capitalization
//   let myStringReverse = reverseString(myString, false); //madam, olleh
  
//   //return whether or not myStringReverse equals myString
//   return (myStringReverse == myString); //either true or false, so returning it just returns true or false
  
// }

//shortest (one line) version
//NOT simple

// function isPalindrome(myString) {

//   return (reverseString(myString.replaceAll(" ", "").toLowerCase(), false) == myString.replaceAll(" ", "").toLowerCase());

// }

//better version of above
function isPalindrome(myString) {

  let myString = myString.replaceAll(" ", "").toLowerCase()
  return (reverseString(myString, false) == myString);

}

//Test: Uncomment the following four lines before running your code. Verify the results.
// console.log(isPalindrome("Racecar") == true); //true
// console.log(isPalindrome("madam") == true); //true
// console.log(isPalindrome("hello") == false); //true
// console.log(isPalindrome("A man a plan a canal Panama") == true); //true
// console.log(isPalindrome("T  a Co      C a      T")); //true



//4. Write a function named "convertTemperature" that takes two parameters: 
//a temperature value and a string representing the current unit ("C" for Celsius or "F" for Fahrenheit). 
//The function should convert the temperature to the opposite unit and return the converted value in a string
//with the unit.




//Test: Uncomment the following four lines before running your code. Verify the results.
//console.log(convertTemperature(0, 'C') == "32F"); //true
//console.log(convertTemperature(100, 'C') == "210F"); //false
//console.log(convertTemperature(32, 'F') == "0C"); //true



//console.log(convertTemperature(98.6, 'F') == 37); //true
//console.log(convertTemperature(-40, 'C') == -40); //true
//console.log(convertTemperature(-40, 'F') == -40); //true
