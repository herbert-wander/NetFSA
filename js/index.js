window.onload = setupFunctions;
window.onresize = resizeSlideshow;

function mapOverlayClear() {
    document.getElementById("overlayMap").style.pointerEvents = "none";
    document.getElementById("overlayMap").style.display = "none";
}

function resizeSlideshow() {
    document.getElementById("welcome").style.maxHeight = Math.floor(document.body.clientWidth / 2.66);
}

function setupFunctions() {


    document.getElementById("carrousel02").classList.remove("slideShowFix");
    document.getElementById("carrousel03").classList.remove("slideShowFix");

    document.getElementById("carrousel02").classList.add("flex");
    document.getElementById("carrousel03").classList.add("flex");

    document.getElementById("carrousel01").classList.add("slideAnimation");
    document.getElementById("carrousel02").classList.add("slideAnimation2");
    document.getElementById("carrousel03").classList.add("slideAnimation3");

    var arrowClickElements = Array.from(document.getElementsByClassName("arrowClick"));
    arrowClickElements.forEach(showAnswerAddListener);

    var navFixElements = Array.from(document.getElementsByClassName("navScrollFix"));
    navFixElements.forEach(navFixAddListener);

    var navMobileFixElements = Array.from(document.getElementsByClassName("mobileMenuClose"));
    navMobileFixElements.forEach(closeMobileMenuAddListener);

    document.getElementById("mobileMenu").addEventListener("click", showMobileMenu);
    document.getElementById("moreOffers").addEventListener("click", showAllDeals);
    document.getElementById("closeDealsFrame").addEventListener("click", closeAllDeals);
    document.getElementsByTagName("body")[0].style.overflowY = "scroll";
    document.getElementById("welcome").style.maxHeight = Math.floor(document.body.clientWidth / 2.66666);
    document.getElementById("pageLoader").classList.add("hideLoaderFX");
    document.getElementById("pageLoader").classList.add("flex");
}

function showMobileMenu(e) {
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
    document.getElementById("mobileMenuModal").style.display = "flex";
}

function closeMobileMenu(e) {
    document.getElementsByTagName("body")[0].style.overflow = "scroll";
    document.getElementById("mobileMenuModal").style.display = "none";
}

function showAllDeals(e) {
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
    document.getElementById("dealsFrame").style.display = "flex";
    document.getElementById("dealsFrame").style.visibility = "visible";
    document.getElementById("dealsFrame").style.overflowY = "scroll";
    document.getElementById("dealsFrame").classList.remove("closeDealSlideFX");
    document.getElementById("closeDealsFrame").classList.remove("closeDealSlideButtonFX");
    document.getElementById("dealsFrame").classList.add("dealSlideFX");
    document.getElementById("closeDealsFrame").classList.add("dealSlideButtonFX");
    //var navHeight = window.getComputedStyle(document.getElementById("headerNav")).height.replace("px", "");
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

function closeMobileMenuAddListener(item) {
    item.addEventListener("click", closeMobileMenu);
}

function navFixAddListener(item) {
    item.addEventListener("click", navFixScroll);
}

function showAnswer(e) {
    var associateElement = e.target.parentElement.nextElementSibling;
    if (window.getComputedStyle(associateElement).display == "none") {
        associateElement.style.display = "block";

        e.target.parentElement.classList.remove("closeQuestionFX");
        e.target.parentElement.classList.add("questionFX");

        e.target.classList.remove("closeQuestionArrowFX");
        e.target.classList.add("questionArrowFX");

        associateElement.classList.remove("closeAnswerFX");
        associateElement.classList.add("answerFX");


    } else {

        e.target.parentElement.classList.remove("questionFX");
        e.target.parentElement.classList.add("closeQuestionFX");

        e.target.classList.remove("questionArrowFX");
        e.target.classList.add("closeQuestionArrowFX");

        associateElement.classList.remove("answerFX");
        associateElement.classList.add("closeAnswerFX");

        associateElement.onanimationend = () => {
            if (window.getComputedStyle(associateElement).display != "none") {
                associateElement.onanimationend = null;
                associateElement.style.display = "none";
            }

        };
    }
}

function navFixScroll(e) {
    e.preventDefault();
    var navHeight = window.getComputedStyle(document.getElementById("headerNav")).height.replace("px", "");
    var scrollPos = document.getElementById(e.target.getAttribute("href").replace("#", "")).offsetTop - navHeight;
    window.scroll(0, scrollPos);
}