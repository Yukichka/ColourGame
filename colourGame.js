var numSquares = 6;
var colors = [];
var squares = document.querySelectorAll(".square");
var pickedColor;
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButton = document.querySelectorAll(".mode");
var hexCode = document.getElementById("hexCode");

init();

function init() {
  setModeButton();
  setSquares();
  reset();
}
// set modeButton event listener 
function setModeButton() {
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
  hexCode.textContent = hexedRGB();
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

//RGB to HEX
function componentToHex(c) {
   var hex = c.toString(16);
   return hex.length == 1 ? "0" + hex : hex;
  }
// combining the hex string from the converted components
function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
// slicing the rgb(number, number, number) string to 3 number variables and returning
// the hexed value
function hexedRGB(){
  var slicedRGB = pickedColor.substring(4, pickedColor.length - 1);
  var rgb = slicedRGB.split(',', 3);
  var r = Number(rgb[0]);
  var g = Number(rgb[1]);
  var b = Number(rgb[2]);
  return rgbToHex(r, g, b);
}
