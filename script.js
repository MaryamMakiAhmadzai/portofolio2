// ===============================
// PAGE LOADER
// ===============================

window.addEventListener("load", function () {

    const loader = document.querySelector(".loader");

    setTimeout(function () {
        loader.classList.add("hide");
    }, 700);

});


// ===============================
// CUSTOM CURSOR
// ===============================

const cursor = document.querySelector(".cursor");
const cursorSmall = document.querySelector(".cursor-small");

document.addEventListener("mousemove", function (e) {

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

    cursorSmall.style.left = e.clientX + "px";
    cursorSmall.style.top = e.clientY + "px";

});


// Cursor Hover Effect

const clickableElements = document.querySelectorAll(
    "a, button, .project-card, .skill-card"
);

clickableElements.forEach(function (element) {

    element.addEventListener("mouseenter", function () {

        cursor.style.width = "55px";
        cursor.style.height = "55px";

    });

    element.addEventListener("mouseleave", function () {

        cursor.style.width = "30px";
        cursor.style.height = "30px";

    });

});


// ===============================
// DARK / LIGHT MODE
// ===============================

const themeToggle = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("theme");


// Check saved theme

if (savedTheme === "light") {

    document.body.classList.add("light");

    themeToggle.innerHTML =
        '<i class="fa-solid fa-sun"></i>';

}


// Change theme

themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("light");

    const lightMode =
        document.body.classList.contains("light");


    if (lightMode) {

        themeToggle.innerHTML =
            '<i class="fa-solid fa-sun"></i>';

        localStorage.setItem(
            "theme",
            "light"
        );

    } else {

        themeToggle.innerHTML =
            '<i class="fa-solid fa-moon"></i>';

        localStorage.setItem(
            "theme",
            "dark"
        );

    }

});


// ===============================
// MOBILE MENU
// ===============================

const menuButton =
    document.getElementById("menuButton");

const mobileMenu =
    document.getElementById("mobileMenu");


menuButton.addEventListener("click", function () {

    mobileMenu.classList.toggle("show");


    if (mobileMenu.classList.contains("show")) {

        menuButton.innerHTML =
            '<i class="fa-solid fa-xmark"></i>';

    } else {

        menuButton.innerHTML =
            '<i class="fa-solid fa-bars"></i>';

    }

});


// Close Mobile Menu

const mobileLinks =
    document.querySelectorAll(".mobile-menu a");

mobileLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        mobileMenu.classList.remove("show");

        menuButton.innerHTML =
            '<i class="fa-solid fa-bars"></i>';

    });

});


// ===============================
// ACTIVE NAVIGATION
// ===============================

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".nav-link");


window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop - 200;

        if (window.scrollY >= sectionTop) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(function (link) {

        link.classList.remove("active");


        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});


// ===============================
// SCROLL REVEAL ANIMATION
// ===============================

const revealElements =
    document.querySelectorAll(
        ".section, " +
        ".stats-section, " +
        ".project-card, " +
        ".skill-card, " +
        ".timeline-item, " +
        ".education-card"
    );


const revealObserver =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "revealed"
                    );

                }

            });

        },

        {
            threshold: 0.1
        }

    );


revealElements.forEach(function (element) {

    revealObserver.observe(element);

});


// ===============================
// PROJECT MOUSE EFFECT
// ===============================

const projectCards =
    document.querySelectorAll(".project-card");


projectCards.forEach(function (card) {

    card.addEventListener(
        "mousemove",
        function (e) {

            const rect =
                card.getBoundingClientRect();

            const x =
                e.clientX - rect.left;

            const y =
                e.clientY - rect.top;


            card.style.setProperty(
                "--mouse-x",
                x + "px"
            );

            card.style.setProperty(
                "--mouse-y",
                y + "px"
            );

        }
    );

});


// ===============================
// BUTTON RIPPLE EFFECT
// ===============================

const buttons =
    document.querySelectorAll(
        ".button, .email-button, .nav-contact"
    );


buttons.forEach(function (button) {

    button.addEventListener("click", function (e) {

        const ripple =
            document.createElement("span");

        ripple.classList.add("ripple");

        const rect =
            button.getBoundingClientRect();

        const x =
            e.clientX - rect.left;

        const y =
            e.clientY - rect.top;


        ripple.style.left =
            x + "px";

        ripple.style.top =
            y + "px";


        button.appendChild(ripple);


        setTimeout(function () {

            ripple.remove();

        }, 600);

    });

});


// ===============================
// EMAIL BUTTON
// ===============================

const emailButton =
    document.querySelector(".email-button");


if (emailButton) {

    emailButton.addEventListener(
        "click",
        function () {

            console.log(
                "Opening email..."
            );

        }
    );

}


// ===============================
// CURRENT YEAR
// ===============================

const currentYear =
    new Date().getFullYear();

const footer =
    document.querySelector(
        ".footer-bottom span"
    );


if (footer) {

    footer.textContent =
        "© " +
        currentYear +
        " Maryam Maki Ahmadzai";

}


// ===============================
// TYPING EFFECT
// ===============================

const typingText =
    document.querySelector(".hero-outline");


const words = [
    "Front-End Developer",
    "Web Designer",
    "Solar Engineer",
    "Creative Developer"
];


let wordIndex = 0;
let characterIndex = 0;
let deleting = false;


function typeEffect() {

    if (!typingText) {
        return;
    }


    const currentWord =
        words[wordIndex];


    if (!deleting) {

        typingText.textContent =
            currentWord.substring(
                0,
                characterIndex + 1
            );

        characterIndex++;


        if (
            characterIndex ===
            currentWord.length
        ) {

            deleting = true;

            setTimeout(
                typeEffect,
                1500
            );

            return;

        }

    } else {

        typingText.textContent =
            currentWord.substring(
                0,
                characterIndex - 1
            );

        characterIndex--;


        if (characterIndex === 0) {

            deleting = false;

            wordIndex++;

            if (
                wordIndex >= words.length
            ) {

                wordIndex = 0;

            }

        }

    }


    const speed =
        deleting ? 60 : 100;


    setTimeout(
        typeEffect,
        speed
    );

}


typeEffect();


// ===============================
// CONSOLE MESSAGE
// ===============================

console.log(
    "%cMaryam Maki Ahmadzai",
    "font-size:25px;font-weight:bold;"
);

console.log(
    "%cFront-End Developer | Solar Engineer",
    "font-size:14px;"
);

console.log(
    "Welcome to my portfolio 🚀"
);