/*
==========================================================
MyTask Website
Main JavaScript
==========================================================
*/

document.addEventListener("DOMContentLoaded", () => {

    initializeScrollReveal();

    initializeSmoothScrolling();

    initializeActiveNavigation();

    initializeBackToTop();

});

/* ==========================================================
   Scroll Reveal
========================================================== */

function initializeScrollReveal() {

    const observer = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },

        {
            threshold: 0.15
        }

    );

    document
        .querySelectorAll(
            ".card, .privacy-item, .screenshots img, .section-title, .hero-text, .hero-image"
        )
        .forEach(element => {

            element.classList.add("fade-up");

            observer.observe(element);

        });

}

/* ==========================================================
   Smooth Anchor Scrolling
========================================================== */

function initializeSmoothScrolling() {

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(anchor => {

            anchor.addEventListener("click", function (e) {

                const target = document.querySelector(
                    this.getAttribute("href")
                );

                if (!target)
                    return;

                e.preventDefault();

                target.scrollIntoView({

                    behavior: "smooth",

                    block: "start"

                });

            });

        });

}

/* ==========================================================
   Active Navigation
========================================================== */

function initializeActiveNavigation() {

    const currentPage = location.pathname
        .split("/")
        .pop() || "index.html";

    document
        .querySelectorAll("nav a")
        .forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === currentPage) {

                link.classList.add("active");

            }

        });

}

/* ==========================================================
   Back To Top Button
========================================================== */

function initializeBackToTop() {

    const button = document.createElement("button");

    button.innerHTML = "↑";

    button.className = "back-to-top";

    document.body.appendChild(button);

    button.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            button.classList.add("visible");

        } else {

            button.classList.remove("visible");

        }

    });

}
