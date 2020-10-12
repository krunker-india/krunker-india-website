const logo_img = document.getElementById("header-logo-img");

logo_img.addEventListener("mouseover", () => {
    logo_img.src = "./img/logo.gif";
});

logo_img.addEventListener("mouseleave", () => {
    logo_img.src = "./img/logo.png";
});