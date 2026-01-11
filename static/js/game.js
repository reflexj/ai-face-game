const img = document.getElementById("face");
const scoreEl = document.getElementById("score");
const streakEl = document.getElementById("streak");

let total = 0;
let correct = 0;
let streak = 0;
let currentIsAI = true;

function loadNext() {
    const iframe = document.getElementById("face");
    iframe.src = "https://thispersondoesnotexist.com/?t=" + Date.now();
}



function answer(userGuessIsAI) {
    total++;

    if (userGuessIsAI === currentIsAI) {
        correct++;
        streak++;
    } else {
        streak = 0;
    }

    scoreEl.textContent = `${correct} / ${total}`;
    streakEl.textContent = `Streak: ${streak}`;

    loadNext();
}

document.getElementById("btn-real").onclick = () => answer(false);
document.getElementById("btn-ai").onclick = () => answer(true);

// initial load
loadNext();
