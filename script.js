document.addEventListener("DOMContentLoaded",function(){
  createBoard(20);
})

function createBoard(size){
  let board = document.querySelector(".board");

  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`; 

  let numDivs = size * size;

  for(let i = 0; i < numDivs; i++){
      let div = document.createElement("div");
      div.addEventListener("mouseover",function(){
        div.style.backgroundColor = "black"
      })
      board.insertAdjacentElement("beforeend", div);
  }}

function erase(){
  let squares = document.querySelectorAll("div")
  squares.forEach((div) => div.style.backgroundColor = "white")
}

  