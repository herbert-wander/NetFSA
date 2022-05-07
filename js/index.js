window.onload = setupFunctions;
$(document).ready(clientesSlide);

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
    document.getElementById("welcome").style.display = "none";
    document.getElementById("mainGradient").style.display = "none";
    window.scrollTo(0, 0);
    document.getElementById("dealsFrame").style.display = "flex";
    document.getElementById("dealsFrame").style.visibility = "visible";
    var navHeight = window.getComputedStyle(document.getElementById("headerNav")).height.replace("px", "");
    //var moreOffersHeight = (100 - (navHeight / (window.innerHeight / 100))) + "vh"
    //var rounded = Math.round(number * 10) / 10
    document.getElementById("dealsFrame").style.top = (navHeight + 1) + "px";
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

function clientesSlide() {
    setInterval(animationOp, 13000);
    var words = $("[data-words]").attr("data-words").split("|");
    var wordsSize = words.length;

    var self = $("[data-words]");
    var selfRet = $("[data-retratos]");

    self.append($('<span id="depoTextSpan0">' + words[0] + '</span>'));
    selfRet.append($('<img id="retCli0" alt="" src="imgs/retratos' + 0 + '.png"></img>'));

    for (var i = 1; i < wordsSize; i++) {
        self.append(($('<span id="depoTextSpan' + i + '">' + words[i] + '</span>')).hide());
        selfRet.append(($('<img id="retCli' + i + '" alt="" src="imgs/retratos' + i + '.png"></img>')).hide());
    }
}

function animationOp() {
    var loopNumber = 3;
    var idElementoText = "depoTextSpan" + countID;
    var idElementoRet = "retCli" + countID;
    $(document.getElementById(idElementoRet)).fadeOut(500);
    $(document.getElementById(idElementoText)).fadeOut(500, function () {
        countID++;
        if (countID == loopNumber) {
            countID = 0;
        }
        idElementoText = "depoTextSpan" + countID;
        $(document.getElementById(idElementoText)).fadeIn(1000);
        idElementoRet = "retCli" + countID;
        $(document.getElementById(idElementoRet)).fadeIn(1000);
    });
}