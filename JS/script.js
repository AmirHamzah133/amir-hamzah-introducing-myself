const menuFloat = document.getElementById("floatingMenu");
const menu = document.getElementById("hamburgerMenu");
const arrowR = document.getElementById("arrowRight");
const arrowL = document.getElementById("arrowLeft");
const dropMenu = document.getElementById("menuDrop");
const exitMenu = document.getElementById("exitMenu");

arrowR.addEventListener("click", function(){
    menuFloat.classList.add("translate-x-40");
    arrowR.classList.toggle("hidden");
    arrowL.classList.remove("hidden");
})

arrowL.addEventListener("click", function(){
    menuFloat.classList.remove("translate-x-40");
    arrowL.classList.toggle("hidden");
    arrowR.classList.remove("hidden");
})

menu.addEventListener("click", function(){
    // dropMenu.classList.remove("hidden");
    dropMenu.classList.remove("translate-y-[100vh]");
    dropMenu.classList.toggle("translate-y-[0vh]");
})

dropMenu.addEventListener("click", function(){
    dropMenu.classList.add("translate-y-[100vh]");
    dropMenu.classList.remove("translate-y-[0vh]");
})