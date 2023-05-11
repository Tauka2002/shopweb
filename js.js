

let myButton = document.getElementById("green");
let myButton1 = document.getElementById("black");
let myButton2 = document.getElementById("blue");
let myButton3 = document.getElementById("white");
let myInput = document.getElementById("myInput");

myButton.addEventListener("click", function() {
  myInput.style.backgroundColor = "green";
});
myButton1.addEventListener("click", function() {
    myInput.style.backgroundColor = "black";
  });
  myButton2.addEventListener("click", function() {
    myInput.style.backgroundColor = "blue";
  });
  myButton3.addEventListener("click", function() {
    myInput.style.backgroundColor = "grey";
  });


