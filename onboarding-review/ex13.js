/*Fill in the provided code template to let someone know 
which movie ratings they are able to see based on their age. 
People aged 17 and up can see any movie; people aged 13-16 can see 
PG-13, PG, or G movies, and everyone else can only see PG or G movies. */

const age = 25;

//can they watch g/pg movies
// if (age < 13) {
//   console.log("You can watch G and PG movies");
// } else if (age < 17) {
//   console.log("You can watch PG13 movies");
// } else {
//   console.log("You can watch R movies");
// }

/*Fill in the provided code template to let someone know which movie ratings they are able to see based on their age. People aged 17 and up can see any movie; people aged 13-16 can see PG-13, PG, or G movies, and everyone else can only see PG or G movies. */



if (age >= 17) {
    console.log(`You are ${age}. You are old enough to see any movie: R, PG-13, PG, or G.`);
} else if (age >= 13) {
    console.log("You can watch PG-13, PG, or G movies")
} else {
    console.log(`You are ${age}. You are only old enough to see PG and G movies.`);
}

let myArray = []

if (myArray.length > 3) {
  myArray.pop();
} else if (myArray.length == 0) {
  console.log("This is empty");
} else {
  console.log("this array is too short")
}

console.log(myArray);


//security system example
let isHome;

let currentTime = 5;
let homeTime = 7;

if (homeTime > currentTime) {
  isHome = false;
} else {
  isHome = true;
}

if (isHome) {
  console.log("Alarm off");
} else {
  console.log("Alarm on");
}