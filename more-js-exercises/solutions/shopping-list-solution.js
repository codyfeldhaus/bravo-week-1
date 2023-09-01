/* 
You're creating a simple shopping list.
Given a list of items in an array, print each item out
in a message that says 'Buy: [ITEM]'

Example input: ["Chicken", "Juice", "Flour"]

Example output:
Buy: Chicken
Buy: Juice
Buy: Flour
*/

//items:
const items = ["Apples", "Bread", "Milk", "Eggs", "Cheese"];

//add your code below this line, include comments describing each line

// Iterate through the items array
for (let i = 0; i < items.length; i++) {
  //store each item in the array in a variable called 'item'
  const item = items[i];
  //log the message including the item name
  console.log(`Buy ${item}`);
}