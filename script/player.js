let musicPlaying = false;
let audio = new Audio("https://file.garden/aC0AvcHvgSVGyTqS/DVT%20-%20E-ditor%20kg.mp3");
audio.volume = 0.35;
audio.loop = true;

function toggleAudio() {
    if (!musicPlaying) {
        audio.play();
    } else {
        audio.pause();
    }
}

audio.addEventListener("play", (event) => {
    const button = document.getElementById("musicButton");
    musicPlaying = true;
    button.classList.add("musicPlaying");
    button.setAttribute("title", "Pause music");
});

audio.addEventListener("pause", (event) => {
    const button = document.getElementById("musicButton");
    musicPlaying = false;
    button.classList.remove("musicPlaying");
    button.setAttribute("title", "Play music");
});