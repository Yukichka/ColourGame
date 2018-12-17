var numSquares = 6;
var colors = [];
var squares = document.querySelectorAll(".square");
var pickedColor;
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButton = document.querySelectorAll(".mode");

init();

function init() {
  setmodeButton();
  setSquares();
  reset();
}
// set modeButton event listener 
function setmodeButton() {
  for (var i = 0; i < modeButton.length; i++) {
   modeButton[i].addEventListener("click", function(){
     modeButton[0].classList.remove("selected");
     modeButton[1].classList.remove("selected");
     this.classList.add("selected");
     this.textContent === "EASY" ? numSquares = 3: numSquares = 6;
     reset();
   });
  }
}
//set squares event listener
function setSquares() {
  for(var i = 0; i < squares.length; i++){
   squares[i].addEventListener("click", function(){
      var clickedColor = this.style.backgroundColor;
    
      if(clickedColor === pickedColor){
        messageDisplay.textContent = "Correct!";
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
        resetButton.textContent = "PLAY NEXT?";
      } else {
          this.style.backgroundColor = "#232323";
          messageDisplay.textContent = "Try Again";
        }
    });
  }
}


function reset() { 
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.display = "block";
    if(colors[i]){
      squares[i].style.backgroundColor = colors[i];
    } else {
        squares[i].style.display = "none";
      }
  }
  h1.style.backgroundColor = "#232323";
  resetButton.textContent = "NEW COLOURS";
  messageDisplay.textContent = "";
}

resetButton.addEventListener("click",function(){
  reset();
})

//set colours
function generateRandomColors(num){
  var arr = []
  for(var i = 0; i < num; i++){
  arr.push(randomColor())
  }
  return arr; 
}

function randomColor(){
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r +", " + g +", "+ b +")";
}
//pick colours
function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}
//change colours
function changeColors(color){
    for (var i = 0; i < squares.length; i++){
	  squares[i].style.backgroundColor = color
	}
}


