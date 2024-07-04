const tellyear = document.querySelector('.years');
const tellmonths = document.querySelector('.months');
const telldays = document.querySelector('.weeks');
const datetell = document.querySelector('.days');
const icon = document.querySelectorAll('.but button');
const today = new Date();
const year = today.getFullYear();
let month = today.getMonth(); // Change const to let
const currentMonth = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

function updateTime() {



    let liTag = "";

    tellyear.innerHTML = year;
    tellmonths.innerHTML = `${currentMonth[month]}`;



    const firstdayofmonth = new Date(year, month, 1).getDay();
    const lastdaylastmonth = new Date(year, month, 0).getDate();



    for (let index = lastdaylastmonth - firstdayofmonth + 1; index <= lastdaylastmonth; index++) {
        let isCurrentDate = tellyear === new Date().getFullYear() && tellmonths === new Date().getMonth() && index === date.getDate();
        const highlightClass = isCurrentDate ? "current-date" : "";
        liTag += `<li class="${highlightClass}" >${index}</li>`
    }



    const lastDayOfMonth = new Date(year, month + 1, 0).getDate();
    const lastDayOfMonthcur = new Date(year, month + 1, lastDayOfMonth).getDay();
    for (let index = 1; index <= lastDayOfMonth; index++) {
        const isCurrentDate = year === new Date().getFullYear() && month === new Date().getMonth() && index === new Date().getDate();
        const highlightClass = isCurrentDate ? "current-date" : "";
        liTag += `<li class="${highlightClass}">${index}</li>`;
    }


    const remainingDays = 6 - (new Date(year, month + 1, lastDayOfMonth).getDay());
    for (let index = 1; index <= remainingDays; index++) {
        liTag += `<li>${index}</li>`;
    }
    datetell.innerHTML = liTag;


}

updateTime();


icon.forEach(button => {
    button.addEventListener("click", () => {
        month += button.id === "prev" ? -1 : 1;
        if (month < 0) {
            month = 12;
            year--;
        } else if (month > 11) {
            month = 0;
            year++;
        }
        updateTime();
    });
});