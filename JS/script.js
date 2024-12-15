const menu = document.getElementById("hamburgerMenu");
const menuFloat = document.getElementById("floatingMenu");
const arrowR = document.getElementById("arrowRight");
const arrowL = document.getElementById("arrowLeft");
const dropMenu = document.getElementById("menuDrop");
const exitMenu = document.getElementById("exitMenu");
const pcard = document.getElementById("pCard");
const card = document.getElementById("card");

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

const imgCard = document.getElementById("imgCard");
const overlayBlack = document.getElementById("overlayBlack");

card.addEventListener("mousemove", function(){
    imgCard.classList.add("brightness-[70%]");
    imgCard.classList.add("scale-[1.3]");
    imgCard.classList.add("blur-[4px]");
    pcard.classList.remove("translate-y-40");
    pcard.classList.add("translate-y-0");
    pcard.classList.remove("hidden");
    overlayBlack.classList.remove("opacity-0");
    overlayBlack.classList.add("opacity-40");
    
    this.addEventListener("mouseleave", function(){
        pcard.classList.remove("translate-y-0");
        pcard.classList.add("translate-y-40");
        imgCard.classList.remove("brightness-[70%]");
        imgCard.classList.remove("scale-[1.3]");
        imgCard.classList.remove("grayscale-[100%]");
        imgCard.classList.remove("blur-[4px]");
        overlayBlack.classList.remove("opacity-40");
        overlayBlack.classList.add("opacity-0");
    })
})

const cardTwo = document.getElementById("cardTwo");
const overlayBlackTwo = document.getElementById("overlayBlackTwo");
const imgCardTwo = document.getElementById("imgCardTwo");
const pCardTwo = document.getElementById("pCardTwo");

cardTwo.addEventListener("mousemove", function(){
    overlayBlackTwo.classList.add("opacity-40");
    imgCardTwo.classList.add("scale-[1.3]");
    imgCardTwo.classList.add("brightness-[70%]");
    imgCardTwo.classList.add("blur-[4px]");
    pCardTwo.classList.remove("translate-y-40");
    pCardTwo.classList.add("translate-y-0");
    
    this.addEventListener("mouseleave", function(){
        overlayBlackTwo.classList.remove("opacity-40");
        overlayBlackTwo.classList.add("opacity-0");
        imgCardTwo.classList.remove("blur-[4px]");
        imgCardTwo.classList.remove("scale-[1.3]");
        pCardTwo.classList.remove("translate-y-0");
        pCardTwo.classList.add("translate-y-40");
        
    })
})

const cardThree = document.getElementById("cardThree");
const overlayBlackThree = document.getElementById("overlayBlackThree");
const imgCardThree = document.getElementById("imgCardThree");
const pCardThree = document.getElementById("pCardThree");

cardThree.addEventListener("mousemove", function(){
    overlayBlackThree.classList.remove("opacity-0");
    overlayBlackThree.classList.add("opacity-40");
    imgCardThree.classList.add("blur-[4px]");
    imgCardThree.classList.add("brightness-[70%]");
    imgCardThree.classList.add("scale-[1.3]");
    pCardThree.classList.remove("translate-y-40");
    pCardThree.classList.add("translate-y-0");

    this.addEventListener("mouseleave", function(){
        overlayBlackThree.classList.remove("opacity-40");
        overlayBlackThree.classList.add("opacity-0");
        imgCardThree.classList.remove("scale-[1.3]");
        imgCardThree.classList.remove("blur-[4px]");
        imgCardThree.classList.remove("brightness-[70%]");
        pCardThree.classList.remove("translate-y-0");
        pCardThree.classList.add("translate-y-40");
    })
})

const infoDropOne = document.getElementById("infoDropOne");
const singleArrowTopOne = document.getElementById("singleArrowTopOne");
const singleArrowBottomOne = document.getElementById("singleArrowBottomOne");
const svgArrowBottomOne = document.getElementById("svgArrowBottomOne");
const svgArrowTopOne = document.getElementById("svgArrowTopOne");

const pDropOne = document.getElementById("pDropOne");
const pDropTwo = document.getElementById("pDropTwo");

infoDropOne.addEventListener("click", function(){
    pDropOne.classList.remove("hidden");
    singleArrowTopOne.classList.remove("hidden");
    singleArrowBottomOne.classList.toggle("hidden");
    svgArrowBottomOne.classList.toggle("hidden");
    
    this.addEventListener("click", function(){
        pDropOne.classList.toggle("hidden");
        singleArrowBottomOne.classList.remove("hidden");
        singleArrowTopOne.classList.toggle("hidden");
    })
})

const infoDropTwo = document.getElementById("infoDropTwo");
const singleArrowTopTwo = document.getElementById("singleArrowTopTwo");
const singleArrowBottomTwo = document.getElementById("singleArrowBottomTwo");
const svgArrowBottomTwo = document.getElementById("svgArrowBottomTwo");
const svgArrowTopTwo = document.getElementById("svgArrowTopTwo");


infoDropTwo.addEventListener("click", function(){
    pDropTwo.classList.remove("hidden");
    singleArrowTopTwo.classList.remove("hidden");
    singleArrowBottomTwo.classList.toggle("hidden");
    svgArrowBottomTwo.classList.toggle("hidden");
    
    this.addEventListener("click", function(){
        pDropTwo.classList.toggle("hidden");
        singleArrowBottomTwo.classList.remove("hidden");
        singleArrowTopTwo.classList.toggle("hidden");
    })
})

// NOTIFICATION

const notificationOne = document.getElementById("notificationOne");
const notification = document.getElementById("notification");
const chatBox = document.getElementById("chatBox");

notification.addEventListener("click", function(){
    notificationOne.classList.add("hidden");
    chatBox.classList.remove("scale-[0]");
    chatBox.classList.toggle("scale-[1]");
    chatBox.classList.remove("translate-y-5");
    chatBox.classList.add("translate-y-0");
    
    this.addEventListener("click", function(){
        chatBox.classList.remove("scale-[1]");
        chatBox.classList.toggle("scale-[0]");
        chatBox.classList.toggle("translate-y-5");
    })
})