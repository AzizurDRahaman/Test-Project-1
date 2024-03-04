document.querySelector(".replay").onclick = function () {
    location.href = "./index.html";
}

document.querySelector(".rules-button").onclick = function () {
    document.querySelector(".rules").classList.toggle("disp");
}


document.querySelector(".close-button").onclick = function () {
    document.querySelector(".rules").classList.toggle("disp");
}