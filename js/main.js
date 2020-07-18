var header = document.querySelector(".navbar-container");

window.onscroll = function() {
    var top = window.scrollY;
    if (top > 1) {
        header.classList.add("bg-light");
    } else {
        header.classList.remove("bg-light");
    }
}