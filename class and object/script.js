// Object
let studentdata = {
  fullname: "hema",
  age: 20,
  math: 33,
  profesional: `webs develope`,
  frist_function: function () {
    console.log(math);
  },
  second_function() {},
};

/*
let arr = ['hema' => "sdfsd" ,'sdfsdf', 3];
let student = [
    fullname : "hema",
    age:20,
    math: 33,
    profesional : `webs develope`,
]*/

let emp = {
  cal() {
    console.log("Emp salary 10% deduction");
  },
};
emp.cal();

let empName = {
  salary: 50000,
};

empName.__proto__ = emp;

// Class car example

class person {
  constructor(){

  }
  work(){
console.log('Not working yet')
  }
  sleep(){
    console.log('Sleep')
  }
  eat(){

    console.log('eat')
  }
}

// how class call
let print = new person;
print.work();

// every function which is in person also now in dr class ku ki extends key words
class dr extends person{
}
let dr_value = new dr;
dr_value.sleep();


// example

class LibraryBook {
  constructor(title, author, year, isAvailable) {
    this.title = title;         // Property: title of the book
    this.author = author;       // Property: author of the book
    this.year = year;           // Property: year of publication
    this.isAvailable = isAvailable; // Property: availability status
  }

  borrow() {
    if (this.isAvailable) {
      this.isAvailable = false;
      console.log(`You borrowed "${this.title}" by ${this.author}.`);
    } else {
      console.log(`Sorry, "${this.title}" is currently unavailable.`);
    }
  }

  return() {
    this.isAvailable = true;
    console.log(`You returned "${this.title}".`);
  }

  info() {
    console.log(`"${this.title}" by ${this.author}, published in ${this.year}. Available: ${this.isAvailable}`);
  }
}
let book1 = new LibraryBook('1984', 'George Orwell', 1949, true);
let book2 = new LibraryBook('To Kill a Mockingbird', 'Harper Lee', 1960, true);
book1.info(); // Output: "1984" by George Orwell, published in 1949. Available: true
book1.borrow(); // Output: You borrowed "1984" by George Orwell.
book1.borrow(); // Output: Sorry, "1984" is currently unavailable.
book1.return(); // Output: You returned "1984".
book1.info(); // Output: "1984" by George Orwell, published in 1949. Available: true

// try and catch error to catch error code will work fine
function processPayment(cardNumber, amount) {
  try {
    // Simulate payment processing
    if (!cardNumber) {
      throw new Error('Card number is required');
    }

    if (amount <= 0) {
      throw new Error('Invalid payment amount');
    }

    // Simulating a scenario where payment fails
    if (Math.random() < 0.5) {
      throw new Error('Payment processing failed due to insufficient funds');
    }

    console.log(`Payment of $${amount} processed successfully with card: ${cardNumber}`);
    
  } catch (error) {
    // Handle errors
    console.error(`Error: ${error.message}`);
    console.log('Please check your payment details and try again.');
  }
}

// Testing the function with different scenarios
processPayment('', 100);           // Card number is required
processPayment('123456789', -50);  // Invalid payment amount
processPayment('123456789', 100);  // Randomly might fail with insufficient funds
