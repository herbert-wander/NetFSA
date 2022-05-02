window.onload = setupFunctions;

function mapOverlayClear() {
    document.getElementById("overlayMap").style.pointerEvents = "none";
    document.getElementById("overlayMap").style.display = "none";
}

function setupFunctions() {
    var arrowClickElements = Array.from(document.getElementsByClassName("arrowClick"));
    arrowClickElements.forEach(showAnswerAddListener);
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