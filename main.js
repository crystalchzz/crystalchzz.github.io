document.addEventListener("DOMContentLoaded", start);

function start() {
  // The first example is done for you. Uncomment the line below and reload the browser.
  myFunction();

  // Your turn! Create a new function called `two`, then call it from here.
}

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
