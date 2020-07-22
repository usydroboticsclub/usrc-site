Array.from(document.querySelectorAll(".sponsorbtn")).forEach(i => i.addEventListener("click", () => {
    window.open("mailto:usydroboticsclub@gmail.com?subject=Propsective Sponsorship&body=Hi, I'd like to sponsor the robotics club! Let's get in touch.");
}))
  
Array.from(document.querySelectorAll(".involvebtn")).forEach(i => i.addEventListener("click", () => {
    window.open("mailto:usydroboticsclub@gmail.com?subject=Sign me up!&body=Hi, I'd like to be added to the USRC mailing list! Thanks!");
}))