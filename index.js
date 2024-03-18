var currentImage = 1;
var image1 = document.querySelector(".image1");
var image2 = document.querySelector(".image2");
var leftArrow = document.querySelector(".left");
var rightArrow = document.querySelector(".right");
var esquinaIzquierda = document.querySelector(".imagen-esquina-izquierda img");
var esquinaDerecha = document.querySelector(".imagen-esquina-derecha img");

// Set initial state
image1.style.opacity = "1";
image2.style.opacity = "0";
esquinaIzquierda.src = "images/clarines_solo.png";
esquinaDerecha.src = "images/logo_CM_naranja_resize.png";

leftArrow.addEventListener("click", function() {
  if (currentImage == 1) {
    image1.style.opacity = "0";
    image2.style.opacity = "1";
    esquinaIzquierda.src = "images/Barcelona.png";
    esquinaDerecha.src = "images/logo_CM_naranja_resize.png";
    currentImage = 2;
  } else {
    image1.style.opacity = "1";
    image2.style.opacity = "0";
    esquinaIzquierda.src = "images/clarines_solo.png";
    esquinaDerecha.src = "images/logo_CM_naranja_resize.png";
    currentImage = 1;
  }
});

rightArrow.addEventListener("click", function() {
  if (currentImage == 1) {
    image1.style.opacity = "0";
    image2.style.opacity = "1";
    esquinaIzquierda.src = "images/Barcelona.png";
    esquinaDerecha.src = "images/logo_CM_naranja_resize.png";
    currentImage = 2;
  } else {
    image1.style.opacity = "1";
    image2.style.opacity = "0";
    esquinaIzquierda.src = "images/clarines_solo.png";
    esquinaDerecha.src = "images/logo_CM_naranja_resize.png";
    currentImage = 1;
  }
});







