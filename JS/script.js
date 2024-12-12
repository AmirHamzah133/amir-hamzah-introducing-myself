const menuFloat = document.getElementById("floatingMenu");
const menu = document.getElementById("hamburgerMenu");
const arrowR = document.getElementById("arrowRight");
const arrowL = document.getElementById("arrowLeft");

arrowR.addEventListener("click", function(){
    menuFloat.classList.add("translate-x-40")
    arrowR.classList.toggle("hidden")
    arrowL.classList.remove("hidden")
})

arrowL.addEventListener("click", function(){
    menuFloat.classList.remove("translate-x-40")
    arrowL.classList.toggle("hidden");
    arrowR.classList.remove("hidden")
})