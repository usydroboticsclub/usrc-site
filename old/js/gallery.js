Array.from(document.querySelectorAll(".sponsorbtn")).forEach(i => i.addEventListener("click", () => {
  window.open("mailto:usydroboticsclub@gmail.com?subject=Propsective Sponsorship&body=Hi, I'd like to sponsor the robotics club! Let's get in touch.");
}))

Array.from(document.querySelectorAll(".involvebtn")).forEach(i => i.addEventListener("click", () => {
  window.open("mailto:usydroboticsclub@gmail.com?subject=Sign me up!&body=Hi, I'd like to be added to the USRC mailing list! Thanks!");
}))

function myFunction(imgs) {
    // Get the expanded image
    var expandImg = document.getElementById("expandedImg");
    // Get the image text
    var imgText = document.getElementById("imgtext");
    // Use the same src in the expanded image as the image being clicked on from the grid
    expandImg.src = imgs.src;
    // Use the value of the alt attribute of the clickable image as text inside the expanded image
    imgText.innerHTML = imgs.alt;
    // Show the container element (hidden with CSS)
    expandImg.parentElement.style.display = "block";
} 



/*

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("column");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}
*/