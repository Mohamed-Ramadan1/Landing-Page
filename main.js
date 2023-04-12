let mainImage = document.querySelector(".img img"),
    contianer = document.querySelector(".container");

function chagneImg(src) {
    mainImage.src = src;
}


function colors(color) {
    contianer.style.background = color;
}