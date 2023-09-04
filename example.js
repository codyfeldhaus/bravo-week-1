let myArr = [1, 2, 3, 4, 5]
// myArr.unshift(0);

// console.log(myArr);

// // myArr = [-1, -1].extend(myArr);

// console.log(myArr);

addToFront(myArr, 100);

function addToFront(arr, val) {
  arr.unshift(val);
}


// console.log(myArr);

// let shiftedItem = myArr.shift();

console.log(myArr.shift());

console.log(myArr);


let num = 1

console.log(num == true);


let grades = [85, 76, 98, 100]

for (let i = 0; i < grades.length; i++) {
  let currentGrade = grades[i];
  console.log(`Your grade is ${currentGrade}`);
}