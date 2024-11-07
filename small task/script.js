for (a = 1; a <= 40; a++) {
  // Start at 1 and increment by 2
  if (a % 2 !== 0) {
    document.write(a);
  }
}

document.write("<br>");
let b = 16;
16 > b ? "adult" : "not adult";
document.write(b);
// if(b===16)
// {
//     document.write(true)
// }

document.write("<br>");
let age = 16;

//let  pre = prompt  ('entre your age');
//prompt("entre your age");
/* if(pre <= age){
document.write(pre + "<br> your age is not good for this");

}

if(pre % 2 ==0){
    document.write(pre + "<br>reminder is 0 "); 
}
else{
    document.write(pre + "<br>reminder is not 0  <br>"); 
document.write(pre + "<br> your age is ok.");}
*/
// if statemnet

/*
let student = prompt ("student grad:");if (student >= 1 && student <= 100) {
if(student >= 90 && student <=100){
    document.write("A");
}
else if(student >= 80 && student <=100){
    document.write("B");
}

else if(student >= 70 && student <=100){
    document.write("C");
}

else if(student >= 60 && student <=100){
    document.write("D");
}

else if(student >= 50 && student <=100){
    document.write("E");
}

else if(student >= 40 && student <=100){
    document.write("F");
}
else if(student >= 33 && student <=100){
    document.write("F");
}
else{
    document.write("Error: You entered a wrong number. Please enter a number between 1 and 100.");
}}*/

/*Loops and strings*/

// game 

/*
let password = "secret123";
let userInput = prompt("Enter your password:");

while (userInput !== password) {
    userInput = prompt("Incorrect. Try again:");
}

alert("Access granted!");
*/

let sum = 0;
for (i = 1; i <= 20; i++) {
  sum = sum + i;
}
document.write("<br> sum of ", sum);
let products = ["Shoes", "Shirt", "Hat", "Socks"];
for (let i = 0; i < products.length; i++) {
  document.write("<br>", products[i]); 
}

/*
let customers = ["John", "Jane", "Jim"];
for (let i = 0; i < customers.length; i++) {
  console.log("Sending email to " + customers[i]);
}
*/
/*
let orders = [1001, 1002, 1003];
for (let order of orders) {
  console.log("Processing order #" + order);
}

let user = { name: "Alice", age: 25, country: "USA" };
for (let key in user) {
  console.log("name of filed", key + ": " + user[("value", key)]); 
}

let message = "Hello World";
console.log(message.length);
*/

let name ="hema";
document.write("<br>",name[0].length, name[0]);

// template literals in js ``

let template = {
    name : 'test',
    age:20
}
document.write(`<br> my name is \n ${template.name} and am ${template.age}`);

    document.write("hello\n world");

var upper= "uppercase";
console.log(upper.toUpperCase());

var upper= "UppperCASE";
console.log(upper.toLowerCase());

let trs= "Remove this white space";
console.log(trs.trim());

let replace = trs.trim().replace('Remove this white space', 'how you doing');
document.write("<br>", replace, "<br>");



// you can used +

let concate = trs.trim().concat( ' this i add line');
document.write("<br>", concate);
 
let connect = "let connect";
let connect2 = 'will added';
document.write("<br>", connect +  " " + connect2);

let change_word = connect.replace('let connect' , 'we never meet yet');
document.write("<br>", change_word);


// Array of js


function vowels(str) {
  // Define a string containing all vowels
  // const vowelList = 'aeiou';
  const list = ['a' , 'e', 'i', 'o', 'u']
  // Initialize a variable to hold the vowels found in the string
  let foundVowels = '';

  // Loop through each character in the input string
  for (let char of str.toLowerCase()) {
      // Check if the character is a vowel
      if (list.includes(char)) {
          foundVowels += char; // Append the vowel to the result string
      }
  }

  return foundVowels; // Return the string of found vowels
}

let view = vowels('hema');
document.write(view); // This will print 'ea'
