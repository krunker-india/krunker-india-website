// Utility Functions

var getID = (id) => document.getElementById(id);

var getClass = (classname, index) => {
    return (index === undefined)
        ? document.getElementsByClassName(classname)
        : document.getElementsByClassName(classname)[index];
}

// Init stuff

const bodyWrapper = getID("body-wrapper");

window.addEventListener("load", () => {
    checkWindowSize(); // For detecting portrait mode
});

// Making the website mobile friendly :kappa:

const windowSizeOverlay = getID("window-size-overlay");

var landscape = true;

window.addEventListener("resize", checkWindowSize);

function checkWindowSize(){
    var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    if(w < h && (windowSizeOverlay.style.display == "" || windowSizeOverlay.style.display == "none")) {
        windowSizeOverlay.style.display = "block";
        landscape = false;
    } else {
        windowSizeOverlay.style.display = "none";
        landscape = true;
    }

    if(landscape){
        document.body.style.backgroundSize = `133% ${h}px`;
        document.body.style.height = h + "px";
    }
}

// Header Logo animation on hover

const logo_img = getID("header-logo-img");

logo_img.addEventListener("mouseover", () => {
    logo_img.src = "./img/logo.gif";
});

logo_img.addEventListener("mouseleave", () => {
    logo_img.src = "./img/logo.png";
});

// Jumpscare

const jumpscare_div = getClass("jumpscare", 0);
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

// Background Music

bodyWrapper.addEventListener("click", () => playBackgroundMusic);

function playBackgroundMusic() {
    console.log("lol");
    const backgound_sound = new Audio("./sounds/background.mp3");
    backgound_sound.loop = true;
    backgound_sound.play();
}