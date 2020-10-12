// Making the website friendly :kappa:

const windowSizeOverlay = document.getElementById("window-size-overlay");

window.addEventListener("load", checkWindowSize);
window.addEventListener("resize", checkWindowSize);

function checkWindowSize(){
    var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    if(w > h && (windowSizeOverlay.style.display == "" || windowSizeOverlay.style.display == "block")) {
        windowSizeOverlay.style.display = "none";
    } else {
        windowSizeOverlay.style.display = "block";
    }
}

// Header Logo animation on hover

const logo_img = document.getElementById("header-logo-img");

logo_img.addEventListener("mouseover", () => {
    logo_img.src = "./img/logo.gif";
});

logo_img.addEventListener("mouseleave", () => {
    logo_img.src = "./img/logo.png";
});

// Jumpscare

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