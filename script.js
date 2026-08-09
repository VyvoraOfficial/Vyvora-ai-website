window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.classList.add("hidden");
    }, 1200);

});

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (!navbar) return;

    if (window.scrollY > 50) {
        navbar.style.background = "rgba(5,10,20,.9)";
    } else {
        navbar.style.background = "rgba(8,17,31,.65)";
    }

});
const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;
        const target = Number(counter.dataset.target);
        let count = 0;

        const updateCounter = () => {
            count += Math.ceil(target / 50);

            if (count >= target) {
                if (target === 99) {
                    counter.innerText = "99%";
                } else if (target === 100 || target === 500) {
                    counter.innerText = target + "+";
                } else {
                    counter.innerText = target;
                }
            } else {
                counter.innerText = count;
                requestAnimationFrame(updateCounter);
            }
        };

        updateCounter();
        observer.unobserve(counter);

    });
});

counters.forEach(counter => observer.observe(counter));/* ================= V4 FLOATING PARTICLES ================= */

const particleContainer = document.getElementById("particles");

if (particleContainer) {

    for (let i = 0; i < 45; i++) {

        const particle = document.createElement("div");

        particle.classList.add("particle");

        particle.style.left = Math.random() * 100 + "%";

        particle.style.animationDuration =
            (8 + Math.random() * 12) + "s";

        particle.style.animationDelay =
            (Math.random() * 10) + "s";

        const size = 2 + Math.random() * 3;

        particle.style.width = size + "px";
        particle.style.height = size + "px";

        particleContainer.appendChild(particle);
    }
}
/* ================= V4 SCROLL ANIMATIONS ================= */

AOS.init({
    duration: 900,
    easing: "ease-out-cubic",
    once: true,
    offset: 80
});
/* ================= V4 MOUSE HOVER GLOW ================= */

const glowCards = document.querySelectorAll(".glass-card, .card");

glowCards.forEach((card) => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
    });

    card.addEventListener("mouseleave", () => {

        card.style.setProperty("--mouse-x", "-200px");
        card.style.setProperty("--mouse-y", "-200px");

    });

});