var header = document.querySelector(".navbar-container");
var goToTop = document.querySelector(".go-to-top")

window.onscroll = function() {
    var top = window.scrollY;
    if (top > 1) {
        header.classList.add("bg-light-a");
        goToTop.classList.add("d-block");
    } else {
        header.classList.remove("bg-light-a");
        goToTop.classList.remove("d-block")
    }
}
