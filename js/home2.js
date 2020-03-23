Array.from(document.querySelectorAll(".sponsorbtn")).forEach(i => i.addEventListener("click", () => {
    window.open("mailto:usydroboticsclub@gmail.com?subject=Propsective Sponsorship&body=Hi, I'd like to sponsor the robotics club! Let's get in touch.");
  }))
  
  Array.from(document.querySelectorAll(".involvebtn")).forEach(i => i.addEventListener("click", () => {
    window.open("mailto:usydroboticsclub@gmail.com?subject=Sign me up!&body=Hi, I'd like to be added to the USRC mailing list! Thanks!");
  }))

window.onscroll = function() {myFunction()};

var header = document.getElementById("header");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}


// $(window).onscroll(function()
//   {
//     if( $(window).scrollTop() > 79 )
//       {
//         $(".header").css({position: 'fixed'});
//         $(".sticky").css({display: 'block'});
//       } 
//       else 
//       {
//         $(".header").css({position: 'static', top: '-79px'});
//         $(".sticky").css({display: 'none'});
//       }
//   }
// );