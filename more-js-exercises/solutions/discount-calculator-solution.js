/*
You're creating a discount calculator for a store. 
Given an array of item prices, calculate and print the discounted price for each item. 
Apply a 10% discount to items priced at or above $50 and a 5% discount to all other items.

Print out a message indicating the original price and the new price of the item.

Example input: [70, 25, 50, 10]

Example output:
Original price: $70, Discount price: $63
Original price: $25, Discount price: $23.75
Original price: $50, Discount price: $45
Original price: $10, Discount price: $9.50
 */

const itemPrices = [25, 60, 30, 75, 15];

//add your code below this line
// Iterate through the itemPrices array
for (let i = 0; i < itemPrices.length; i++) {
  //store each price in a variable
  const price = itemPrices[i];
  //declare a variable to store the discounted price
  let discountedPrice;

  //check if the price is 50 or more
  if (price >= 50) {
    //if so, apply the 10% discount and store in the discounted price variable
    discountedPrice = price * 0.9;
  } else {
    //if not, apply the 5% discount and store in discounted price variable
    discountedPrice = price;
  }
  //print out the message with original and discounted prices
  console.log(`Original Price: $${price}, Discounted Price: $${discountedPrice}`);
}
