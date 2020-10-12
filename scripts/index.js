const logo_img = document.getElementById("header-logo-img");

logo_img.addEventListener("mouseover", () => {
    logo_img.src = "./img/logo.gif";
});

logo_img.addEventListener("mouseleave", () => {
    logo_img.src = "./img/logo.png";
});


const jumpscare_div = document.getElementsByClassName("jumpscare")[0];
const jumpscare_sound = new Audio("./sounds/jumpscare.mp3");

logo_img.addEventListener("click", () => {
    jumpscare_sound.currentTime = 0.4;
    jumpscare_sound.play();
    jumpscare_div.style.display = "block";
    jumpscare_div.style.animation = "jumpscareFadeOut 4s";
    setTimeout(() => {
        jumpscare_div.style.animation = "";
        jumpscare_div.style.display = "none";
    }, 4000);
});