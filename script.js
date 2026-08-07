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
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
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

counters.forEach(counter => observer.observe(counter));
/* ================= PARTICLES ================= */

const particles = document.getElementById("particles");

for(let i = 0; i < 40; i++){

    const particle = document.createElement("span");

    particle.classList.add("particle");

    particle.style.left = Math.random() * 100 + "%";

    particle.style.animationDuration =
        (6 + Math.random() * 10) + "s";

    particle.style.animationDelay =
        Math.random() * 5 + "s";

    particle.style.opacity =
        Math.random();

    particles.appendChild(particle);

}
/* ================= CURSOR GLOW ================= */

const glow = document.getElementById("cursor-glow");

document.addEventListener("mousemove",(e)=>{

    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";

});