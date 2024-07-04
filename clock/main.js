const deg = 6;
let hours = document.querySelector("#hr");
let minute = document.querySelector("#mn");
let second = document.querySelector("#sc");

function updateClock() {
    const now = new Date();
    let hh = now.getHours() * 30;
    let mm = now.getMinutes() * deg;
    let ss = (now.getSeconds() * deg) + (now.getMilliseconds() * deg / 1000);

    hours.style.transform = `rotateZ(${hh + (mm / 12)}deg)`;
    minute.style.transform = `rotateZ(${mm}deg)`;
    second.style.transform = `rotateZ(${ss}deg)`;
}

setInterval(updateClock, 1000);
updateClock();