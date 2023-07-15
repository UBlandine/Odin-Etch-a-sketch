document.addEventListener("DOMContentLoaded", function(){

  createBoard(16);

  let btn_popup = document.querySelector("#popup");
  btn_popup.addEventListener("click", function(){
    let size = getSize();
    createBoard(size);
  })

})

function createBoard(size){
  let board = document.querySelector(".board");
  board.style.gridTemplateColumns = "repeat(${size}, 1fr)";
  board.style.gridTemplateRows = "repeat(${size}, 1fr";

  let numDivs = size * size;

  for(let i = 0; i< numDivs; i++){
    let div = document.createElement("div");
   div.addEventListener("mouseover", colorDic) {
    
    board.insertAdjacentElement("beforeend", div);
   }
}

function getSize(){
  let inPut = prompt("What will bw the size of the board");
  if(input == ""){
    message.innerHtml = " please provide a number";

  }
  else if (input < 0 || input > 100){
    message.innerHtml = "provide a number between 1 and 100"
  }
   else{
    message.innerHtml = "Now yo u play"
    return input;
   }
function colorDiv(){
if(color == "random"){
  this.style.backgroundColor = 'hsl(${Math.random() * 360}, 100%, 50%)'
}
else{
  this.style.backgroundColor = 'black'
}
}
function setColor(colorChoice){
  let color = colorChoice;
}

}