let boxes = document.querySelectorAll(".box");
let reset = document.querySelector('#reset');
let msg = document.querySelector('.msg');
let removecontent = document.querySelector('.hide');
let winparttner = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0,3,6],
  [1, 4, 7],
  [2, 5, 8]
];

let player = true;

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("click");
    if (player == true) {
      box.innerText = "X";
      player = false;
    }
else{
    box.innerText = "O";
    player = true;
}
checkwinner();
box.disabled  = true;

  });
});

let disabledbtn = () =>{
    for(box of boxes){
        box.disabled =true
    }
}
let showwinner = (winner)=>{
    msg.innerText = `Hey you win ${winner}`;
    removecontent.classList.remove('hide');
    disabledbtn();

}
const checkwinner = () =>{
    for(let pattner of winparttner){
        
        let partner1 = boxes[pattner[0]].innerText;
        let partner2 = boxes[pattner[1]].innerText;
        let partner3 = boxes[pattner[2]].innerText;
        console.log(pattner ) ;
        if(partner1 !='' && partner2 !='' && partner3 !=''){
            if(partner1 === partner2 && partner2===partner3){
                console.log('winner', partner1);
                showwinner(partner1)
            }
            
        }
        console.log(boxes[pattner[0]].innerText);
    } 
}
