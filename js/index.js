window.onload = setupFunctions;

function mapOverlayClear() {
    document.getElementById("overlayMap").style.pointerEvents = "none";
    document.getElementById("overlayMap").style.display = "none";
}

function setupFunctions() {
    var arrowClickElements = Array.from(document.getElementsByClassName("arrowClick"));
    document.getElementById("moreOffers").addEventListener("click", showAllDeals);
    arrowClickElements.forEach(showAnswerAddListener);
}

function showAllDeals(e) {
    //document.getElementsByTagName("body")[0].style.height = "100%";
    document.getElementById("welcome").style.display = "none";
    document.getElementById("mainGradient").style.display = "none";
    //document.getElementsByTagName("body")[0].style.overflowY = "hidden";
    document.getElementById("headerNav").style.width = "100%";
    document.getElementById("headerNav").style.position = "fixed";
    document.getElementById("headerNav").style.top = 0;
    document.getElementById("dealsFrame").style.visibility = "visible";
    var navHeight = window.getComputedStyle(document.getElementById("headerNav")).height.replace("px", "");
    //var moreOffersHeight = (100 - (navHeight / (window.innerHeight / 100))) + "vh"
    //var rounded = Math.round(number * 10) / 10
    document.getElementById("dealsFrame").style.top = (navHeight + 1) + "px";
    //document.getElementById("dealsFrame").style.height = "100%";

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