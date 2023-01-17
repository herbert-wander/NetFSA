window.onload = setupFunctions;
window.onresize = resizeSlideshow;

let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3
};

function mapOverlayClear() {
    document.getElementById("overlayMap").style.pointerEvents = "none";
    document.getElementById("overlayMap").style.display = "none";
}

function resizeSlideshow() {
    document.getElementById("welcome").style.maxHeight = Math.floor(document.body.clientWidth / 2.66);
}

async function setupFunctions() {
    await getRemotePlansData();
    let observer = new IntersectionObserver(aboutUsAnimation, options);
    observer.observe(document.getElementById("aboutUs"));

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
    document.getElementById("pageLoader").onanimationend = () => {
        document.getElementById("pageLoader").style.display = "none";
    };
}

async function getRemotePlansData() {
    await fetch("https://raw.githubusercontent.com/herbert-wander/NetFSAData/main/priceplansdata.json")
        .then(data => data.json())
        .then(data => {
            setMainCards(data);
            setPlansCardList(data);
        })
        .catch(error => console.log("Error = " + error));
}

function setMainCards(data) {
    let plansData = [];
    let scanPos = 0;
    while (plansData.length < 3 && scanPos < data.planos.length) {
        if (data.planos[scanPos].nivelDeDestaque == 1 || data.planos[scanPos].nivelDeDestaque == 2) {
            plansData.push(data.planos[scanPos]);
        }
        scanPos++;
    }
    if (plansData[0].nivelDeDestaque == 2) {
        let replaceHtml = document.getElementById("offerCard02").getElementsByTagName("h2")[0];
        replaceHtml.innerHTML = replaceHtml.innerHTML.replace("450 megas", plansData[0].nome)
        document.getElementById("offerCard02").getElementsByClassName("priceCard")[0].innerHTML = "R$ " + plansData[0].preco;

        replaceHtml = document.getElementById("offerCard01").getElementsByTagName("h2")[0];
        replaceHtml.innerHTML = replaceHtml.innerHTML.replace("50 megas", plansData[1].nome)
        document.getElementById("offerCard01").getElementsByClassName("priceCard")[0].innerHTML = "R$ " + plansData[1].preco;

        replaceHtml = document.getElementById("offerCard03").getElementsByTagName("h2")[0];
        replaceHtml.innerHTML = replaceHtml.innerHTML.replace("90 megas", plansData[2].nome)
        document.getElementById("offerCard03").getElementsByClassName("priceCard")[0].innerHTML = "R$ " + plansData[2].preco;
    } else if (plansData[1].nivelDeDestaque == 2) {
        let replaceHtml = document.getElementById("offerCard02").getElementsByTagName("h2")[0];
        replaceHtml.innerHTML = replaceHtml.innerHTML.replace("450 megas", plansData[1].nome)
        document.getElementById("offerCard02").getElementsByClassName("priceCard")[0].innerHTML = "R$ " + plansData[1].preco;

        replaceHtml = document.getElementById("offerCard01").getElementsByTagName("h2")[0];
        replaceHtml.innerHTML = replaceHtml.innerHTML.replace("50 megas", plansData[2].nome)
        document.getElementById("offerCard01").getElementsByClassName("priceCard")[0].innerHTML = "R$ " + plansData[2].preco;

        replaceHtml = document.getElementById("offerCard03").getElementsByTagName("h2")[0];
        replaceHtml.innerHTML = replaceHtml.innerHTML.replace("90 megas", plansData[0].nome)
        document.getElementById("offerCard03").getElementsByClassName("priceCard")[0].innerHTML = "R$ " + plansData[0].preco;
    } else {
        let replaceHtml = document.getElementById("offerCard02").getElementsByTagName("h2")[0];
        replaceHtml.innerHTML = replaceHtml.innerHTML.replace("450 megas", plansData[2].nome)
        document.getElementById("offerCard02").getElementsByClassName("priceCard")[0].innerHTML = "R$ " + plansData[2].preco;

        replaceHtml = document.getElementById("offerCard01").getElementsByTagName("h2")[0];
        replaceHtml.innerHTML = replaceHtml.innerHTML.replace("50 megas", plansData[1].nome)
        document.getElementById("offerCard01").getElementsByClassName("priceCard")[0].innerHTML = "R$ " + plansData[1].preco;

        replaceHtml = document.getElementById("offerCard03").getElementsByTagName("h2")[0];
        replaceHtml.innerHTML = replaceHtml.innerHTML.replace("90 megas", plansData[0].nome)
        document.getElementById("offerCard03").getElementsByClassName("priceCard")[0].innerHTML = "R$ " + plansData[0].preco;
    }
}

function setPlansCardList(data) {
    replaceHtml = document.getElementById("cardsDealContainer");
    let htmlPlansData = "";
    data.planos.forEach(element => {
        if (element.temTvGratis) {
            htmlPlansData += `
                <div class="cardDealOffer flex">
                    <div class="titleOfferContainer flex">
                        <span class = "dealTitleOffer"> ` + element.nome + ` <br> fibra óptica </span>
                        <img src="imgs/MoreOffers_Arrow.svg" alt="">
                    </div>
                    <div class="dealsFeaturesIconsBox flex">
                        <img src="imgs/OfferCardIcon_SmartPhone.svg" alt="">
                        <img src="imgs/OfferCardIcon_Computer.svg" alt="">
                        <img src="imgs/OfferCardIcon_GameConsole.svg" alt="">
                        <img src="imgs/OfferCardIcon_HDVideo.svg" alt="">
                        <img src="imgs/MoreOffers_Wifi.svg" alt="">
                        <span class="dealPlusSign">+</span>
                        <img src="imgs/MoreOffers_Tv.svg" alt="">
                        <span>Gratis</span>
                    </div>
                    <div class="dealPriceContract flex">
                        <span>por apenas</span>
                        <span class = "dealPriceExta"> R$ ` + element.preco + ` </span>
                        <a class="dealButton"
                            href="https://api.whatsapp.com/send?phone=557530222334&text=Olá! Gostaria de contratar um produto com vocês, como podemos prosseguir?"
                            target="_blank">Contratar</a>
                    </div>
                </div>
            `;
        } else {
            htmlPlansData += `
                <div class = "cardDealOffer flex  fix35Card">
                    <div class = "titleOfferContainer flex">
                        <span class = "dealTitleOffer"> ` + element.nome + ` <br> fibra óptica </span>
                        <img src="imgs/MoreOffers_Arrow.svg" alt="">
                    </div>
                    <div class="dealsFeaturesIconsBox flex">
                        <img src="imgs/OfferCardIcon_SmartPhone.svg" alt="">
                        <img src="imgs/OfferCardIcon_Computer.svg" alt="">
                        <img src="imgs/OfferCardIcon_GameConsole.svg" alt="">
                        <img src="imgs/OfferCardIcon_HDVideo.svg" alt="">
                        <img src="imgs/MoreOffers_Wifi.svg" alt="">
                    </div>
                    <div class="dealPriceContract flex">
                        <span>por apenas</span>
                        <span class = "dealPriceExta"> R$ ` + element.preco + ` </span>
                        <a class="dealButton"
                            href="https://api.whatsapp.com/send?phone=557530222334&text=Olá! Gostaria de contratar um produto com vocês, como podemos prosseguir?"
                            target="_blank">Contratar</a>
                    </div>
                </div>
            `;
        }

    });
    replaceHtml.innerHTML = htmlPlansData;
}

function showMobileMenu(e) {
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
    document.getElementById("mobileMenuModal").style.display = "flex";
}

function closeMobileMenu(e) {
    document.getElementsByTagName("body")[0].style.overflowY = "scroll";
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
    if (e.target.getAttribute("href").includes("#")) {
        e.preventDefault();
        var navHeight = window.getComputedStyle(document.getElementById("headerNav")).height.replace("px", "");
        var scrollPos = document.getElementById(e.target.getAttribute("href").replace("#", "")).offsetTop - navHeight;
        window.scroll(0, scrollPos);
    }
}

function aboutUsAnimation(entries, observer) {
    if (entries[0].isIntersecting) {
        var aboutUsCards = Array.from(document.getElementsByClassName("aboutUsCard"));
        aboutUsCards.forEach(element => {
            element.classList.add("aboutUsAppear");
        });
    }
}