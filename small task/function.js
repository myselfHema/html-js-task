// create a function to count how much vowels in a string

function hello() {
  document.write(" <br>First function");
}
hello();

function function2(printme) {
  document.write(" <br>" + printme);
}
function2("second function");

// Array of js

function vowels(str) {
  // Define a string containing all vowels
  const vowelList = "aeiou";
  const list = ["a", "e", "i", "o", "u"];
  // Initialize a variable to hold the vowels found in the string
  let foundVowels = "";

  // Loop through each character in the input string
  for (let char of str.toLowerCase()) {
    // Check if the character is a vowel
    if (list.includes(char)) {
      foundVowels += char; // Append the vowel to the result string
    }
  }

  return foundVowels; // Return the string of found vowels
}

let view = vowels("hema");
document.write("<br>", view); // This will print 'ea'

let arrow = (string_store) => {
  count = 0;
  for (let data of string_store) {
    if (
      data === "a" ||
      data === "e" ||
      data === "i" ||
      data === "" ||
      data === "u"
    ) {
      count++;
    }
  }
  document.write("<br>", count);
};
arrow("eeeeee");

let numbers = [22, 33, 223, 44];
let bg_numbe = numbers.reduce((num1, num2) => {
  return num1 > num2 ? num1 : num2;
});
console.log(bg_numbe);

let marks2 = [20, 49, 90, 50, 99];
let topper = marks2.filter((num_maks) => {
  return num_maks > 90;
});
console.log(topper);

// programing function
let n = prompt("entre a numbe");
let prompt_number = [];
for (let p = 0; p < n; p++) {
  prompt_number[p] = p;
}
console.log(prompt_number);

let prompt_sum = prompt_number.reduce((result, current) => {
  return result + current;
});
console.log(prompt_sum);

let prompt_multi = prompt_number.reduce((result, current) => {
  return result * current;
});
console.log(prompt_multi);

let prices = [10, 20, 30, 40];
let totalPrice = prices.reduce((total, price) => total + price, 0);
console.log(totalPrice); // Output: 100

let under_prices = [5, 10, 20, 30, 40];
let newaffordablePrices = under_prices.filter((price) => price < 30);
console.log(newaffordablePrices); // Output: [10, 20]

// Add a 10% tax to all item prices (using map()).
// Show only the items priced under $50 after tax (using filter()).
// Calculate the total price of those filtered items (using reduce()).

let newprices = [10, 20, 30, 40, 60, 80];

// 1. Add 10% tax to all prices
let pricesWithTax = newprices.map((price) => price * 1.1);

// 2. Filter out prices above $50 after tax
let affordablePrices = pricesWithTax.filter((price) => price <= 50);

// 3. Calculate the total price of affordable items
let totalAffordablePrice = affordablePrices.reduce(
  (total, price) => total + price,
  0
);

console.log(totalAffordablePrice); // Output: 110 (22, 33, 44, and 11 summed)
