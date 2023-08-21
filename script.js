const navbar = document.getElementById("navbar");

// Add or remove 'scrolled' class when scrolling
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});