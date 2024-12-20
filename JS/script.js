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
    // imgCard.classList.remove("grayscale-[100%]");
    pcard.classList.remove("translate-y-40");
    pcard.classList.add("translate-y-0");
    pcard.classList.remove("hidden");
    overlayBlack.classList.remove("opacity-0");
    overlayBlack.classList.add("opacity-40");
    
    this.addEventListener("mouseleave", function(){
        pcard.classList.remove("translate-y-0");
        pcard.classList.add("translate-y-40");
        imgCard.classList.remove("brightness-[70%]");
        // imgCard.classList.add("grayscale-[100%]");
        imgCard.classList.remove("scale-[1.3]");
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
    // imgCardTwo.classList.remove("grayscale-[100%]");
    imgCardTwo.classList.add("blur-[4px]");
    pCardTwo.classList.remove("translate-y-40");
    pCardTwo.classList.add("translate-y-0");
    
    this.addEventListener("mouseleave", function(){
        overlayBlackTwo.classList.remove("opacity-40");
        overlayBlackTwo.classList.add("opacity-0");
        imgCardTwo.classList.remove("blur-[4px]");
        imgCardTwo.classList.remove("scale-[1.3]");
        // imgCardTwo.classList.add("grayscale-[100%]");
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
    // imgCardThree.classList.remove("grayscale-[100%]");
    pCardThree.classList.remove("translate-y-40");
    pCardThree.classList.add("translate-y-0");
    
    this.addEventListener("mouseleave", function(){
        overlayBlackThree.classList.remove("opacity-40");
        overlayBlackThree.classList.add("opacity-0");
        imgCardThree.classList.remove("scale-[1.3]");
        imgCardThree.classList.remove("blur-[4px]");
        imgCardThree.classList.remove("brightness-[70%]");
        // imgCardThree.classList.add("grayscale-[100%]");
        pCardThree.classList.remove("translate-y-0");
        pCardThree.classList.add("translate-y-40");
    })
})

// DROP INFO COLUMN ONE ROW ONE

const infoDropOne = document.getElementById("infoDropOneOne");
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

// DROP INFO COLUMN ONE ROW TWO
const infoDropOneTwo = document.getElementById("infoDropOneTwo");
const singleArrowTopOneTwo = document.getElementById("singleArrowTopOneTwo");
const singleArrowBottomOneTwo = document.getElementById("singleArrowBottomOneTwo");
const svgArrowBottomOneTwo = document.getElementById("svgArrowBottomOneTwo");
const svgArrowTopOneTwo = document.getElementById("svgArrowTopOneTwo");

const pDropOneTwo = document.getElementById("pDropOneTwo");

infoDropOneTwo.addEventListener("click", function(){
    pDropOneTwo.classList.remove("hidden");
    singleArrowTopOneTwo.classList.remove("hidden");
    singleArrowBottomOneTwo.classList.toggle("hidden");
    svgArrowBottomOneTwo.classList.toggle("hidden");
    
    this.addEventListener("click", function(){
        pDropOneTwo.classList.toggle("hidden");
        singleArrowBottomOneTwo.classList.remove("hidden");
        singleArrowTopOneTwo.classList.toggle("hidden");
    })
})


// DROP INFO COLUMN TWO ROW ONE

const infoDropTwo = document.getElementById("infoDropTwoOne");
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


// DROP INFO COLUMN TWO ROW TWO

const infoDropTwoTwo = document.getElementById("infoDropTwoTwo");
const singleArrowTopTwoTwo = document.getElementById("singleArrowTopTwoTwo");
const singleArrowBottomTwoTwo = document.getElementById("singleArrowBottomTwoTwo");
const svgArrowBottomTwoTwo = document.getElementById("svgArrowBottomTwoTwo");
const svgArrowTopTwoTwo = document.getElementById("svgArrowTopTwoTwo");
const pDropTwoTwo = document.getElementById("pDropTwoTwo");


infoDropTwoTwo.addEventListener("click", function(){
    pDropTwoTwo.classList.remove("hidden");
    singleArrowTopTwoTwo.classList.remove("hidden");
    singleArrowBottomTwoTwo.classList.toggle("hidden");
    svgArrowBottomTwoTwo.classList.toggle("hidden");
    
    this.addEventListener("click", function(){
        pDropTwoTwo.classList.toggle("hidden");
        singleArrowBottomTwoTwo.classList.remove("hidden");
        singleArrowTopTwoTwo.classList.toggle("hidden");
    })
})

// NOTIFICATION

const notificationOne = document.getElementById("notificationOne");
const notification = document.getElementById("notification");
const exitChatBoxNotification = document.getElementById("exitChatBoxNotification");
const chatBox = document.getElementById("chatBox");
const exitChatBox = document.getElementById("exitChatBox");
const tracing = document.getElementById("tracingBox");

notification.addEventListener("click", function(event){
    event.preventDefault();  // yang penting gak error
    chatBox.classList.remove("scale-[0]");
    chatBox.classList.toggle("scale-[1]");
    chatBox.classList.remove("translate-y-5");
    chatBox.classList.add("-translate-y-2");
    tracing.classList.remove("translate-y-6");
    tracing.classList.add("-translate-y-1");
    tracing.classList.remove("scale-[0]");
    tracing.classList.add("scale-[1]");
    notificationOne.classList.add("hidden");
    notification.classList.add("hidden");
    exitChatBoxNotification.classList.remove("hidden");
});

exitChatBox.addEventListener("click", function() {
    chatBox.classList.remove("scale-[1]");
    chatBox.classList.toggle("scale-[0]");
    chatBox.classList.remove("-translate-y-2");
    chatBox.classList.add("translate-y-5");
    tracing.classList.remove("-translate-y-1");
    tracing.classList.add("translate-y-6");
    tracing.classList.remove("scale-[1]");
    tracing.classList.add("scale-[0]");
    notification.classList.remove("hidden");
    exitChatBoxNotification.classList.add("hidden");
})

exitChatBoxNotification.addEventListener("click", () => {
    chatBox.classList.remove("scale-[1]");
    chatBox.classList.add("scale-[0]");
    chatBox.classList.remove("-translate-y-2");
    chatBox.classList.add("translate-y-5");
    exitChatBoxNotification.classList.add("hidden");
    notification.classList.remove("hidden");
    tracing.classList.remove("-translate-y-1");
    tracing.classList.add("translate-y-6");
    tracing.classList.remove("scale-[1]");
    tracing.classList.add("scale-[0]");
})

