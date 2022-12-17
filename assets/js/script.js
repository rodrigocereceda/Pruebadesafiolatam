let nav = document.querySelector(".navbar");
window.onscroll = function () {
    if (document.body.scrollTop >= 400 || document.documentElement.scrollTop >= 400 ) {
        nav.classList.add("solido")
        nav.classList.remove("transparente")
    }
    else {
        nav.classList.add("transparente")
        nav.classList.remove("solido")
    }
}