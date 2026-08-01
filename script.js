// Music Player
const music = document.getElementById("bgMusic");
const playBtn = document.getElementById("playMusic");

playBtn.addEventListener("click", () => {
    if (music.paused) {
        music.play();
        playBtn.innerHTML = "⏸ Pause Our Song";
    } else {
        music.pause();
        playBtn.innerHTML = "🎵 Play Our Song";
    }
});

// Love Counter
const startDate = new Date("December 23, 2024 00:00:00");

function updateCounter() {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("loveCounter").innerHTML =
        `${days} Days ❤️ ${hours} Hours ❤️ ${minutes} Minutes ❤️ ${seconds} Seconds`;
}

setInterval(updateCounter, 1000);
updateCounter();

// Surprise Button
document.getElementById("surpriseBtn").addEventListener("click", () => {

    document.getElementById("surpriseMessage").style.display = "block";

    // Fireworks
    for (let i = 0; i < 8; i++) {
        setTimeout(() => {
            confetti({
                particleCount: 200,
                spread: 120,
                origin: {
                    x: Math.random(),
                    y: Math.random() * 0.6
                }
            });
        }, i * 400);
    }
});

// Falling Rose Petals
function createPetal() {

    const petal = document.createElement("div");

    petal.innerHTML = "🌹";

    petal.style.position = "fixed";
    petal.style.left = Math.random() * 100 + "vw";
    petal.style.top = "-50px";
    petal.style.fontSize = (20 + Math.random() * 20) + "px";
    petal.style.zIndex = "999";

    document.body.appendChild(petal);

    let pos = -50;

    const fall = setInterval(() => {

        pos += 3;

        petal.style.top = pos + "px";
        petal.style.transform =
            `rotate(${pos}deg)`;

        if (pos > window.innerHeight) {
            clearInterval(fall);
            petal.remove();
        }

    }, 30);

}

setInterval(createPetal, 700);

// Floating Hearts
function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-20px";
    heart.style.fontSize = (18 + Math.random() * 18) + "px";
    heart.style.opacity = "0.8";
    heart.style.pointerEvents = "none";

    document.body.appendChild(heart);

    let y = 0;

    const fly = setInterval(() => {

        y += 3;

        heart.style.bottom = y + "px";
        heart.style.opacity -= 0.004;

        if (y > window.innerHeight) {
            clearInterval(fly);
            heart.remove();
        }

    }, 30);

}

setInterval(createHeart, 500);

// Smooth Scroll Animation
window.addEventListener("scroll", () => {

    document.querySelectorAll(".glass").forEach(card => {

        const top = card.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }

    });

});

}
