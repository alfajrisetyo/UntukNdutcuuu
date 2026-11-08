
// ===============================
// JAM DIGITAL
// ===============================

function updateClock() {
    const now = new Date();

    document.getElementById("clock").textContent =
        now.toLocaleTimeString("id-ID", {
            hour12: false
        });

    document.getElementById("date").textContent =
        now.toLocaleDateString("id-ID", {
            weekday: "long",
            day: "numeric",
            month: "long"
        });
}

updateClock();
setInterval(updateClock, 1000);


// ===============================
// BINTANG BERKELIP
// ===============================

const stars = document.getElementById("stars");

for (let i = 0; i < 90; i++) {
    const star = document.createElement("span");

    star.className = "star";
    star.textContent = Math.random() > 0.7 ? "✦" : "·";

    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";
    star.style.fontSize = 8 + Math.random() * 15 + "px";
    star.style.animationDelay = Math.random() * 3 + "s";

    stars.appendChild(star);
}


// ===============================
// HATI DAN BUNGA BERJATUHAN
// ===============================

const falling = document.getElementById("falling");

const symbols = ["♡", "♥", "🌸", "✿", "🦋"];

function createFalling() {
    const item = document.createElement("span");

    item.className = "float";

    item.textContent =
        symbols[Math.floor(Math.random() * symbols.length)];

    item.style.left = Math.random() * 100 + "%";
    item.style.fontSize = 15 + Math.random() * 18 + "px";
    item.style.color = "#ffb8d2";
    item.style.animationDuration = 8 + Math.random() * 7 + "s";

    falling.appendChild(item);

    setTimeout(() => item.remove(), 16000);
}

setInterval(createFalling, 900);


// ===============================
// MUSIK MP3
// ===============================

const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", async function () {

    if (music.paused) {
        try {
            await music.play();
            musicBtn.textContent = "♫ Pause Music";
        } catch (error) {
            alert("Pastikan file music.mp3 sudah dimasukkan ke folder website!");
        }
    } else {
        music.pause();
        musicBtn.textContent = "♫ Play Music";
    }

});


// ===============================
// MEMBUKA SURAT RAHASIA
// ===============================

const envelope = document.getElementById("envelope");
const letterMessage = document.getElementById("letterMessage");

envelope.addEventListener("click", function () {

    envelope.classList.toggle("open");

    letterMessage.classList.toggle("hidden");

});


// ===============================
// EFEK CONFETTI
// ===============================

function launchConfetti() {

    const colors = [
        "#ffb8d2",
        "#ffffff",
        "#f8d6a0",
        "#d9c4ff"
    ];

    for (let i = 0; i < 90; i++) {

        const piece = document.createElement("span");

        piece.textContent = "✦";
        piece.style.position = "fixed";
        piece.style.zIndex = "99";
        piece.style.top = "-20px";
        piece.style.left = Math.random() * 100 + "vw";
        piece.style.color =
            colors[Math.floor(Math.random() * colors.length)];

        piece.style.animation = "fallingConfetti 3s linear forwards";

        document.body.appendChild(piece);

        setTimeout(() => piece.remove(), 3500);
    }
}


// Tambahkan animasi confetti melalui CSS
const confettiStyle = document.createElement("style");

confettiStyle.textContent = `
@keyframes fallingConfetti {
    to {
        transform: translateY(110vh) rotate(720deg);
        opacity: 0;
    }
}`;

document.head.appendChild(confettiStyle);


// ===============================
// TOMBOL KEJUTAN
// ===============================

document.getElementById("surpriseBtn")
.addEventListener("click", function () {

    document.getElementById("surpriseMessage")
        .classList.remove("hidden");

    this.textContent = "Surprise Unlocked! ♡";

    launchConfetti();

});


// ===============================
// MAKE A WISH
// ===============================

const wishes = [
    "Semoga semua impianmu segera menjadi nyata! ✨",
    "May your night be full of happiness! ♡",
    "Semoga besok ada banyak alasan untuk tersenyum! 🌷"
];

document.getElementById("wishBtn")
.addEventListener("click", function () {

    const randomWish =
        wishes[Math.floor(Math.random() * wishes.length)];

    document.getElementById("wishMessage").textContent =
        randomWish;

    launchConfetti();

});


// ===============================
// MINI GAME MOOD
// ===============================

const moodMessages = {

    calm: "Take a deep breath. You deserve a peaceful night. 🌙",

    happy: "Keep smiling! Semoga besok lebih indah dari hari ini. ✨",

    sweet: "A little flower for you. Stay lovely, Ndutcuuu! 🌸"

};

document.querySelectorAll("[data-mood]")
.forEach(button => {

    button.addEventListener("click", function () {

        const mood = this.dataset.mood;

        document.getElementById("moodMessage")
            .textContent = moodMessages[mood];

    });

});
