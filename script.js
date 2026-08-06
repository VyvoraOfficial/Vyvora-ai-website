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
    entries.forEach(entry => {
        if (entry.isIntersecting) {

            const counter = entry.target;
            const target = parseInt(counter.dataset.target);
            let count = 0;

            const updateCounter = () => {
                count += Math.ceil(target / 50);

                
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
}

            updateCounter();
            observer.unobserve(counter);
        }
    });
});

counters.forEach(counter => observer.observe(counter));