// Window Nude
// window > document > html > head | body >
console.dir(window.document.body);
console.log(document.body);

function bg() {
  document.body.style.background = "pink";
  document.body.childNodes[1].innerText = "abbsfdkb";
  document.getElementById("para").style.background = "pink";
  document.getElementById("para").style.color = "black";

  // document.body.childNodes[3].innerText = 'abbsfdkb';
}

// document.addEventListener("DOMContentLoaded", bg);

function black() {
  document.body.style.background = "black";
  document.getElementById("para").style.background = "red";
  document.getElementById("para").style.color = "white";
  let test = document.getElementsByClassName("para_class");
  for (let para_class of test) {
    para_class.style.color = "white";
  }
}
let test = document.getElementsByClassName("para_class");
console.log(test);
let tags = document.getElementsByTagName("h2");
for (let i = 0; i < tags.length; i++) {
  console.log(tags[i].innerText); // Logs the text content of each <h2>
}

console.log(tags);

// select by query sector

// select frist one
let fri_element = document.querySelector(".para_class");
let all_element = document.querySelectorAll("#web_bg");
console.log(fri_element);
console.log(all_element);

let paragraphs = document.getElementsByClassName("paragraph");
console.log(paragraphs); // HTMLCollection [<p>, <p>]

// add h3 text which is heading three add "hading h3 hain "
let heading_three = document.querySelector("h3");
heading_three.innerText = heading_three.innerText + " hading h3 hain";
// heading_three.innerText=" heading three hading h3 hain";

// change you div content add new content
let divcontent = document.querySelectorAll(".div_cont");
let divnum = 1;
for (divloop of divcontent) {
    divloop.innerText = `new text added thanks ${divnum}`;
  divnum++;
}


// attribute access change
let homeLink = document.getElementById("home-link");

// Changing the 'href' attribute directly
homeLink.href = "homepage.html"; // Change the link destination

// Changing the 'id' attribute directly
homeLink.id = "new-home-link";

// Changing the 'className' (classes) directly
homeLink.className = "nav-link new-class"; // Add or change classes

let logo = document.getElementById("logo");
let logoSrc = logo.getAttribute("src"); // Get the src attribute
console.log(logoSrc); // Outputs: "logo.png"
let logo1 = document.getElementById("logo");
logo1.setAttribute("src", "new-logo.png"); // Change the src attribute
let logo3 = document.getElementById("logo");
logo3.removeAttribute("alt"); // Removes the alt attribute


// dom manipulation add elemento first last anywhere
// appendchild removechaild

let create_element = document.createElement('h6'); // Create an h6 element
create_element.innerHTML = "Created by JavaScript"; // Set its inner HTML content

let after_atag = document.querySelector('#home-link'); // Select an element with the id 'home-link'

if (after_atag) { // Ensure the element exists before appending
    after_atag.append(create_element); // Append the new element after the selected one
} else {
    console.log("Element with id 'home-link' not found.");
}

let newheading =    document.createElement('h1');
newheading.innerHTML = "This is fresh heading";
document.querySelector("body").prepend(newheading); 

let paranew= document.querySelector('p');
paranew.remove();


const div = document.createElement("div");
div.className = "foo";

// our starting state: <div class="foo"></div>
console.log(div.outerHTML);

// use the classList API to remove and add classes
div.classList.remove("foo");
div.classList.add("anotherclass");

// <div class="anotherclass"></div>
console.log(div.outerHTML);

// if visible is set remove it, otherwise add it
div.classList.toggle("visible");

// add/remove visible, depending on test conditional, i less than 10
div.classList.toggle("visible", i < 10);

// false
console.log(div.classList.contains("foo"));

// add or remove multiple classes
div.classList.add("foo", "bar", "baz");
div.classList.remove("foo", "bar", "baz");

// add or remove multiple classes using spread syntax
const cls = ["foo", "bar"];
div.classList.add(...cls);
div.classList.remove(...cls);

// replace class "foo" with class "bar"
div.classList.replace("foo", "bar");
