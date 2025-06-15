let musicPlaying = false;
let audio;
let title = "";

switch (window.location.pathname) {
    case "/shrines/webkinz/":
        audio = new Audio("https://file.garden/aC0AvcHvgSVGyTqS/Webkinz%20Classic%20OST%20-%20Quizzy%20Question%20Corner%20Theme%20%5BhC-U7QM4DMA%5D.mp3");
        title = "Webkinz - Quizzy's Question Corner"
        break;

    case "/shrines/":
        audio = new Audio("https://file.garden/aC0AvcHvgSVGyTqS/skunksweeper_ost");
        title = "Webkinz - Skunksweeper Hide N' Skunk"
        break;

    case "/about/":
        audio = new Audio("https://file.garden/aC0AvcHvgSVGyTqS/AnimalJam_BestDressed_rec.mp3");
        title = "Animal Jam - Best Dressed (Preperation)"
        break;

    default:
        audio = new Audio("https://file.garden/aC0AvcHvgSVGyTqS/DVT%20-%20E-ditor%20kg.mp3");
        title = "??? (DVT - E-ditor)"
        break;
}

audio.volume = 0.35;
audio.loop = true;

function toggleAudio() {
    if (!musicPlaying) {
        audio.play();
    } else {
        audio.pause();
    }
}

let tooltipTimer;

audio.addEventListener("play", (event) => {
    const button = document.getElementById("musicButton");
    musicPlaying = true;
    button.classList.add("musicPlaying");
    button.setAttribute("title", "Pause music");

    document.getElementById("musicTitle").innerHTML = title;
    button.children[0].classList.add("expanded");
    tooltipTimer = setTimeout(() => {
        button.children[0].classList.remove("expanded")
    }, 10000)
});

audio.addEventListener("pause", (event) => {
    const button = document.getElementById("musicButton");
    musicPlaying = false;
    button.classList.remove("musicPlaying");
    button.setAttribute("title", "Play music");
    
    clearTimeout(tooltipTimer);
    button.children[0].classList.remove("expanded");
});