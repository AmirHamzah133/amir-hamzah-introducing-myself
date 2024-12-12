const menuFloat = document.getElementById("floatingMenu");
const menu = document.getElementById("hamburgerMenu");
const arrowR = document.getElementById("arrowRight");
const arrowL = document.getElementById("arrowLeft");

arrowR.addEventListener("click", function(){
    menuFloat.classList.remove("right-4")
    menuFloat.translate.valueOf(40)
    arrowR.classList.toggle("hidden")
    arrowL.classList.remove("hidden")
})

arrowL.addEventListener("click", function(){
    menuFloat.classList.toggle("right-4");
    arrowL.classList.toggle("hidden");
    arrowR.classList.remove("hidden")
})