
window.addEventListener('DOMContentLoaded', () => {

    const sections = Array.from(document.getElementsByClassName("sec"));
    const links = Array.from(document.getElementsByClassName("navbuttons"));

    links.forEach((link) => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // prevent default link behavior

            const href = link.getAttribute("href"); // get the href attribute
            const section = document.querySelector(href); // find the corresponding section
            if (section) {
                section.style.display = "block"; // show the section
                // hide the other sections
                sections.forEach((s) => {
                    if (s !== section) {
                        s.style.display = "none";
                    }
                });
            }
        });
    });

    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');
    const menuMobile = document.getElementById('menu-vert');

    const menuLinks = Array.from(menuMobile.getElementsByTagName("a"));
    menuLinks.forEach((link) => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // prevent default link behavior

            const href = link.getAttribute("href"); // get the href attribute
            const section = document.querySelector(href); // find the corresponding section
            if (section) {
                section.style.display = "block"; // show the section
                // hide the other sections
                sections.forEach((s) => {
                    if (s !== section) {
                        s.style.display = "none";
                    }
                });
            }
        });
    });

    menuToggle.addEventListener('click', function() {
        menuMobile.innerHTML = menu.innerHTML;
        if (menuMobile.style.display == 'block') {
            menuMobile.style.display = 'none';
        }
        else {
            menuMobile.style.display = 'block';
            const vertLinks = Array.from(menuMobile.getElementsByClassName("navbuttons"));
            vertLinks.forEach((link) => {
                link.addEventListener("click", function (event) {
                    event.preventDefault(); // prevent default link behavior
                    const href = link.getAttribute("href"); // get the href attribute
                    const section = document.querySelector(href); // find the corresponding section
                    if (section) {
                        section.style.display = "block"; // show the section
                        // hide the other sections
                        sections.forEach((s) => {
                            if (s !== section) {
                                s.style.display = "none";
                            }
                        });
                    }
                });
            });
        }
    });

    window.addEventListener('resize', function() {
        if (window.innerWidth > 800) {
            menuMobile.style.display = 'none';
        }
    });


});
























