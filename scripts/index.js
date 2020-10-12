const logo_img = document.getElementById("header-logo-img");
const jumpscare_div = document.getElementsByClassName("jumpscare")[0];

logo_img.addEventListener("mouseover", () => {
    logo_img.src = "./img/logo.gif";
});

logo_img.addEventListener("mouseleave", () => {
    logo_img.src = "./img/logo.png";
});

logo_img.addEventListener("click", () => {
    jumpscare_div.style.display = "block";
    jumpscare_div.style.animation = "jumpscareFadeOut 4s";
    setTimeout(() => {
        jumpscare_div.style.animation = "";
        jumpscare_div.style.display = "none";
    }, 4000);
});