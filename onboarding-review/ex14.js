// let temperature = 90;
// let day = "Monday";

// //Only if both conditions are true will the code in the curly braces will be executed
// if (temperature >= 80 && day == "Saturday") {
//     console.log("Let's go to the beach!");
// } else {
//     console.log("Sorry we can't go to the beach today.");
// }

// if (day == "Saturday" || day == "Sunday") {
//   console.log("It's the weekend!");
// } else {
//   console.log("Not the weekend yet I'm afraid.");
// }

// if (!(temperature > 32)) {
//   console.log("Careful! It might snow!");	
// } else {
//   console.log("At least it's above freezing!");
// }

const word = "mirrors"

if (word.length <= 5 || word.length >= 10) { 
    console.log("This word is not an acceptable length.");
} else if (word.toLowerCase().charAt(0) == "x" || word.toLowerCase().charAt(0) == "q") {
    console.log("This word starts with a prohibited letter.");
} else if (word.length == 7 && !(word.charAt(word.length - 1) == "s")) {
    console.log("Sorry a 7 letter word has to end in s.");
} else {
    console.log("This word works!");
}

let relative = "brother"

// if (relative == "mother" || "father")

// if (relative == "mother" || relative == "father") {
//   console.log("maybe a parent");
// } else {
//   console.log("inconclusive");
// }