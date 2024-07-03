let btn = document.querySelector("navbtn");
// Function to get the Y position of an element
let sidenavbtn = document.querySelector(".sidenav")


var yPosition1 = 1200
var yPosition2 = 2900
var yPosition3 = 4200
var yPosition4 = 6400
function scrollToY(yPosition) {
  window.scrollTo({
    top: yPosition,
    behavior: 'smooth' 
  });
}

function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginRight = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginRight= "0";
}
