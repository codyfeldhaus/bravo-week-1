//necessary for testing, do not change the following line
import assert from 'assert';

/**
Write a function chunkArray(arr, size) that splits an array into chunks 
of a specified size and returns them as a two-dimensional array.

If the array cannot be split evently, the final internal array can be shorter.

Example Input: [1,2,3,4,5,6,7,8], 3
Example Output: [[1,2,3], [4,5,6], [7,8]]


Comment out the test code below to test your function when ready.
 */
function chunkArray(arr, size) {
  //your code here
  let chunked = [];

  for (let i = 0; i < arr.length; i += size) {
    let chunk = arr.slice(i, i + size);
    chunked.push(chunk);
  }

  return chunked;

}




//Uncomment the following lines to run tests:
// try {
//   assert(JSON.stringify(chunkArray([1,2,3,4,5,6,7,8], 3)) == JSON.stringify([[1,2,3], [4,5,6], [7,8]]));
//   console.log("Test 1 passed!");
// } catch {
//   console.log("Test 1 failed.");
// }
// try {
//   assert(JSON.stringify(chunkArray([1,2,3,4,5], 2)) == JSON.stringify([[1,2], [3,4], [5]]));
//   console.log("Test 2 passed!");
// } catch {
//   console.log("Test 2 failed.");
// }
// try {
//   assert(JSON.stringify(chunkArray([1,2,3], 5)) == JSON.stringify([[1,2,3]]));
//   console.log("Test 3 passed!");
// } catch {
//   console.log("Test 3 failed.");
// }