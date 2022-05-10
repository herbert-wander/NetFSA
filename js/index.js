window.onload = setupFunctions;

function mapOverlayClear() {
    document.getElementById("overlayMap").style.pointerEvents = "none";
    document.getElementById("overlayMap").style.display = "none";
}

function setupFunctions() {
    var arrowClickElements = Array.from(document.getElementsByClassName("arrowClick"));
    document.getElementById("moreOffers").addEventListener("click", showAllDeals);
    document.getElementById("closeDealsFrame").addEventListener("click", closeAllDeals);
    arrowClickElements.forEach(showAnswerAddListener);
}

function showAllDeals(e) {
    //document.getElementById("welcome").style.display = "none";
    //document.getElementById("mainGradient").style.display = "none";
    //window.scrollTo(0, 0);
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
    document.getElementById("dealsFrame").style.display = "flex";
    document.getElementById("dealsFrame").style.visibility = "visible";
    document.getElementById("dealsFrame").style.overflowY = "scroll";
    document.getElementById("dealsFrame").classList.remove("closeDealSlideFX");
    document.getElementById("closeDealsFrame").classList.remove("closeDealSlideButtonFX");
    document.getElementById("dealsFrame").classList.add("dealSlideFX");
    document.getElementById("closeDealsFrame").classList.add("dealSlideButtonFX");
    var navHeight = window.getComputedStyle(document.getElementById("headerNav")).height.replace("px", "");
    //var moreOffersHeight = (100 - (navHeight / (window.innerHeight / 100))) + "vh"
    //var rounded = Math.round(number * 10) / 10
    //document.getElementById("dealsFrame").style.top = (navHeight + 1) + "px";
}

function closeAllDeals(e) {
    document.getElementById("dealsFrame").classList.add("closeDealSlideFX");
    document.getElementById("closeDealsFrame").classList.add("closeDealSlideButtonFX");
    document.getElementById("dealsFrame").classList.remove("dealSlideFX");
    document.getElementById("closeDealsFrame").classList.remove("dealSlideButtonFX");
    document.getElementsByTagName("body")[0].style.overflowY = "scroll";
    document.getElementById("dealsFrame").style.overflowY = "hidden";
}

function showAnswerAddListener(item) {
    item.addEventListener("click", showAnswer);
}

function showAnswer(e) {
    if (e.target.classList.contains("arrowClick")) {
        if (window.getComputedStyle((e.target.parentElement.nextElementSibling)).display == "none") {
            e.target.parentElement.nextElementSibling.style.display = "block";
        } else {
            e.target.parentElement.nextElementSibling.style.display = "none";
        }
    }

}