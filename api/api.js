const url = "https://cat-fact.herokuapp.com/facts";
let promised = fetch(url);
let facts = document.querySelector("#facts");
let btn = document.querySelector("#btn");
console.log(promised);

const getfetchdata = async () => {
  console.log("Loading data");

  try {
    let response = await fetch(url);

    if (!response.ok) {
      // Handle HTTP errors
      throw new Error("Network response was not ok");
    }

    let data = await response.json();

    if (data.length === 0) {
      facts.innerHTML += `<p id="facts">No facts available</p>`;
      console.log("No data found");
    } else {
      for (let a = 0; a < data.length; a++) {
        facts.innerHTML += `<p id="facts">${data[a].text}</p>`;
      }
      console.log("Print all data");
    }
  } catch (error) {
    facts.innerHTML += `<p id="facts">Server error: ${error.message}</p>`;
    console.error("Fetch error:", error);
  }

  // Make sure to call the function to execute it
  getfetchdata();

  //   for (let a = 0; a < data.length; a++) {
  //     facts.innerHTML += `<p id="facts">${data[a].text}</p>`; // Append each fact
  //     console.log("Print all data");
  //   }

  console.log(data);
  //   facts.innerText = data[0].text;
  //   facts.innerText = data[1].text;
};

//  getfetchdata();
btn.addEventListener("click", getfetchdata);

// fetch api post MDN website

// Real life project currncy convert

const BASE_URL = "https://2024-10-15.currency-api.pages.dev/v1/currencies/";
let dropdown = document.querySelectorAll(".dropdown select");
let btnsubmit = document.querySelector('form button');
let fromCurr = document.querySelector('.from select');
let toCurr = document.querySelector('.to select'); // Add this line
const msg = document.querySelector(".msg");


for (let select of dropdown) {
  // console.log(code, countryList[code]);
  for(curr_code in countryList){
    let newoption = document.createElement("option")
    newoption.innerText = curr_code;
    newoption.value = curr_code;
    if(select.name === "from" && curr_code === "USD"){
      newoption.selected = true; 
    }
    else if(select.name === "to" && curr_code === "INR"){
      newoption.selected = true; 
    }
    select.append(newoption);

  }


select.addEventListener("change", (evt) =>{
  updateflag(evt.target);
});
}
const updateflag = (element) =>{
let curr_code = element.value;
let countycode = countryList[curr_code];
let src_img = `https://flagsapi.com/${countycode}/flat/64.png`;
let img = element.parentElement.querySelector("img");
if(img){
img.src = src_img;
}
else{
  console.log('Wrong');
}
}

// btnsubmit.addEventListener('click', async (element) =>{
//   element.preventDefault();
//   let amount = document.querySelector('form input');
//   let amoun_val = amount.value;
//   // console.log(amoun_val);
//   if(amoun_val === "" || amoun_val < 1){
//     amount.value = "1";
//   }

// // console.log(from_cur.value, to_cur.value)
// const url_currncy = `${BASE_URL}${from_cur.value.toLowerCase()}.json`;
// let response = await fetch(url_currncy);
// let data = await response.json();
// let rate = data[toCurr.value.toLowerCase()];
// let finalAmount = (data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()]*parseInt(amount.value)).toFixed(2);

// console.log(response);
// });



const updateExchangeRate = async () => {
  let amount = document.querySelector("form input");
  let amtVal = amount.value;
  if (amtVal === "" || amtVal < 1) {
    amtVal = 1;
    amount.value = "1";
  }
  const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}.json`;
  let response = await fetch(URL);
  let data = await response.json();
  let rate = data[toCurr.value.toLowerCase()];
  let finalAmount = (data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()]*parseInt(amount.value)).toFixed(2);
  msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
  console.log(msg);
  console.log(rate);
};


btnsubmit.addEventListener("click", (evt) => {
  evt.preventDefault();
  updateExchangeRate();
});

window.addEventListener("load", () => {
  updateExchangeRate();
});
