let musicPlaying = false;
let audio = new Audio("https://file.garden/aC0AvcHvgSVGyTqS/DVT%20-%20E-ditor%20kg.mp3");
audio.volume = 0.35;
audio.loop = true;

function toggleAudio(button) {
    if (!musicPlaying) {
        audio.play();
        button.setAttribute("title", "Pause music");
    } else {
        audio.pause();
        button.setAttribute("title", "Play music");
    }

    musicPlaying = !musicPlaying;
    button.classList.toggle("musicPlaying");
}