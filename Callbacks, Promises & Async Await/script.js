function hello() {
  console.log("hello");
}
setTimeout(hello, 2000); // hello words pass it is function and after that set time 2sec

setTimeout(() => {
  console.log("print after hello");
}, 3000);

// callback function
function fetchUserData(callback) {
  // Simulating an API call with setTimeout
  setTimeout(() => {
    const userData = { name: "Alice", age: 30 }; // Simulated fetched data
    callback(userData); // Call the callback with the fetched data
  }, 2000); // Simulate 2 seconds of network delay
}

function processUserData(data) {
  console.log(`User Name: ${data.name}`);
  console.log(`User Age: ${data.age}`);
}

// Using the callback
fetchUserData(processUserData);

function data(id, getnextdata) {
  setTimeout(() => {
    if (getnextdata) {
      getnextdata();
    }
    console.log("This is data ", id);
  }, 2000);
}
// many callback function  and callback hell 
data(1, () => {
  data(2, () => {
    data(3, () => {
      data(4, () =>{

      })
    });
  });
});
