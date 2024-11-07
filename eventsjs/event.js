
 document.addEventListener('DOMContentLoaded', function() {
     // Initialize the click count
 let count = 0;

 // Get the button element by its ID
 let countclick = document.getElementById('btn');

 // Add an event listener to the button for the 'click' event
 countclick.addEventListener('click', function() {
     // Increment the count on each click
     count++;

     // Update the inner text of the paragraph with the new count
     document.getElementById('click-count').innerText = `Button clicked ${count} times`;
 });

});

let btn1 = document.querySelector('#btn1')
btn1.onclick = () =>{
    // document.write('button working fine');
    document.getElementById('message').innerHTML = 'Button working fine';
};


// addEventListener learn
// .node.addEventListener(eventname, functionhandlaer)

let addEventListener_var = document.querySelector('#event-listener');
addEventListener_var.addEventListener('click', ()=>{
    console.log('even working proper');
})


let addEventListener_var1 = document.querySelector('#event-listener');
addEventListener_var1.addEventListener('click', function(){
    console.log('even working proper');
});

// removeEventListener 

let submitButton = document.getElementById('submit-btn');
        
// Define the event handler function
function handleSubmit() {
    console.log("Form submitted!");

    // Disable the button by removing the event listener after the first click
    submitButton.removeEventListener('click', handleSubmit);

    // Optional: Disable the button to indicate it can't be clicked anymore
    submitButton.disabled = true;
}

// Add an event listener for the click event
submitButton.addEventListener('click', handleSubmit);


let bg_body = document.querySelector('#bg-change');

bg_body.onclick = function() {
    // Get the current background color of the body
    let currentBgColor = window.getComputedStyle(document.body).backgroundColor;

    // Toggle between black and white based on the current background color
    if (currentBgColor === 'rgb(0, 0, 0)') {  // 'rgb(0, 0, 0)' is black in RGB format
        document.body.style.background = "white";
        document.body.style.color = "black";  // Ensure text is visible on white background
        document.body.querySelector('#bg-change').innerText = "Background is White";  // Update button text
    } else {
        document.body.style.background = "black";
        document.body.style.color = "white";  // Ensure text is visible on black background
        document.body.querySelector('#bg-change').innerText = "Background is Black";  // Update button text
    }
};


let body_new = document.querySelector('body');
let currentmode= "lightmode";
let btn_change_design = document.querySelector('#btn_change_design');
// btn1.onclick = () =>{}
body_new.onclick = function (){
if(currentmode==="lightmode"){
    currentmode = "darkmode";
   body_new.classList.add('lightmode');
   body_new.classList.remove('darkmode')

}

else{
    currentmode = "lightmode";
    body_new.classList.add('darkmode');
    body_new.classList.remove('lightmode');
}
console.log(currentmode);
};