
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");






function countdown() {

    const newYearsDate = new Date(new Date().getFullYear() + 1, 0, 1);
    const currentDate = new Date();
    const totalseconds = (newYearsDate - currentDate) / 1000;
    
    const days = Math.floor(totalseconds/ 3600 / 24);
    const hours = Math.floor(totalseconds / 3600) % 24;
    const mins = Math.floor(totalseconds / 60) % 60;
    const seconds = Math.floor(totalseconds) % 60;

   

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);


}

function formatTime(time) {
    return time < 10 ?  `0${time}`: time;
}



// intial call
countdown();

setInterval(countdown, 1000);