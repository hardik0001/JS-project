let hours = document.querySelector("#hr");
let minute = document.querySelector("#mn");
let second = document.querySelector("#sc");
const ampm = document.getElementById("ampm");



function updateTime() {
    const now = new Date();
    const hr = now.getHours().toString().padStart(2, '0');
    const min = now.getMinutes().toString().padStart(2, '0');
    const sec = now.getSeconds().toString().padStart(2, '0');
    // const clockelement = document.getElementsByClassName('digital')[0];


    hours.textContent = `${hr}`;
    minute.textContent = `${min}`;
    second.textContent = `${sec}`;
    ampm.textContent = hr >= 12 ? `PM` : `AM`

}
setInterval(updateTime, 1000);
updateTime();