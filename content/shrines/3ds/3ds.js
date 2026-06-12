power = false;

function togglePower() {
    const console = document.querySelector("#console");
    if (!power) {
        console.setAttribute("data-on", "");
    } else {
        console.removeAttribute("data-on");
    }

    document.querySelector("#powerHint")?.remove();

    power = !power;
}
