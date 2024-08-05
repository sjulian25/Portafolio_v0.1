const menuButton = document.querySelector("#menu-button");
const menuItems = document.querySelector("#menu");
const menuButtonSpans = document.querySelectorAll("#menu-button span");
const menuButtonIcons = document.querySelectorAll("#menu-button i");
const links = document.querySelectorAll("#menu a");

// Abrir menu
menuButton.addEventListener("click", () => {
    menuItems.classList.toggle("hidden");

    menuButtonSpans.forEach((span) => {
        span.classList.toggle("animado");
    })

})

links.forEach((link) => {
    link.addEventListener("click", () => {
        menuItems.classList.add("hidden");
        menuButtonSpans.forEach((span) => {
            span.classList.remove("animado");
        })
    })
})

// Cerrar el menu
window.onresize = function () {
    let w = window.outerWidth;
    if (w > 768) {
        menuItems.classList.add("hidden");
        menuButtonSpans.forEach((span) => {
            span.classList.remove("animado");
        })
    }
}