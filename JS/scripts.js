document.addEventListener("DOMContentLoaded", function() {
    var header = document.querySelector("header");
    var scrollIndicator = document.getElementById("scrollIndicator");

    var dots = scrollIndicator.querySelectorAll(".dot");
    var sections = document.querySelectorAll("section");

    function setActiveDot() {
    var scrollPosition = window.scrollY;
    var sensitivity = 0.51; // Adjust this value to change sensitivity (0.51 means at least 51% of the section must be visible)

    sections.forEach(function(section, index) {
        var sectionTop = section.offsetTop - header.offsetHeight;
        var sectionBottom = sectionTop + section.offsetHeight;
        var visibleHeight = window.innerHeight - header.offsetHeight;

        // Check if at least sensitivity * visibleHeight of the section is visible
        if (
            scrollPosition + sensitivity * visibleHeight >= sectionTop &&
            scrollPosition + (1 - sensitivity) * visibleHeight <= sectionBottom
        ) {
            dots.forEach(function(dot) {
                dot.classList.remove("active");
            });
            dots[index].classList.add("active");
        }
    });
}


    window.addEventListener("scroll", function() {
        if (window.scrollY > header.offsetHeight) {
            scrollIndicator.classList.add("visible");
            setActiveDot();
        } else {
            scrollIndicator.classList.remove("visible");
        }
    });

    // Call setActiveDot initially to highlight the correct dot on page load
    setActiveDot();

    
});
//Menu hamburger clique
const menuHamburger = document.querySelector(".menu-hamburger");
const navLinks = document.querySelector(".nav-links");

menuHamburger.addEventListener("click", () => {
  navLinks.classList.toggle("mobile-menu");
});

