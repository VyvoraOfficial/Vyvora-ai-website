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
// ================= PARTICLES =================

const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];

for (let i = 0; i < 80; i++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 3 + 1,
        dx: (Math.random() - 0.5) * 0.4,
        dy: (Math.random() - 0.5) * 0.4
    });
}

function animateParticles() {

    ctx.clearRect(0,0,canvas.width,canvas.height);

    particles.forEach(p => {

        p.x += p.dx;
        p.y += p.dy;

        if(p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if(p.y < 0 || p.y > canvas.height) p.dy *= -1;

        ctx.beginPath();
        ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
        ctx.fillStyle = "rgba(79,140,255,.7)";
        ctx.fill();

    });

    requestAnimationFrame(animateParticles);

}

animateParticles();

window.addEventListener("resize",()=>{

    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;

});