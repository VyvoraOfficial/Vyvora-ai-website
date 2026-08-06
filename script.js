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

});const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {

            const counter = entry.target;
            const target = +counter.dataset.target;

            let count = 0;

            const update = () => {
                count += Math.ceil(target / 50);

                if (count >= target) {
                    counter.innerText = target + "+";
                } else {
                    counter.innerText = count;
                    requestAnimationFrame(update);
                }
            };

            update();
            observer.unobserve(counter);
        }
    });
});

counters.forEach(counter => observer.observe(counter));