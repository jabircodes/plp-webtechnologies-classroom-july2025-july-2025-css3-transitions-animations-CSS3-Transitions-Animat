// Part 2: JavaScript Functions

// Global variable
let globalColor = "#55ddefff";

// Function with parameter & return value
function changeBoxColor(elementId, newColor) {
  let box = document.getElementById(elementId);
  box.style.backgroundColor = newColor;
  return `Box ${elementId} is now ${newColor}`;
}

// Function demonstrating local scope
function doubleNumber(num) {
  let result = num * 2; // local variable
  return result;
}

// Function that uses global scope
function resetBoxColor(elementId) {
  let box = document.getElementById(elementId);
  box.style.backgroundColor = globalColor;
}

// Part 3: Combining CSS and  JS

// Toggle bouncing animation
function toggleBounce() {
  let box = document.getElementById("animateBox");
  box.classList.toggle("bouncing");
}

// Popup toggle
function togglePopup() {
  let popup = document.getElementById("popup");
  popup.classList.toggle("active");
}
