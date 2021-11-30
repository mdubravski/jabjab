const dayEl = document.querySelector('.timer__day');
const hourEl = document.querySelector('.timer__hour');
const minuteEl = document.querySelector('.timer__minute');
const secondEl = document.querySelector('.timer__second');
let input = document.querySelector('#end');
let endDate = new Date(input.value);

// get differnece between start and end date
function getTimeDiff(start,end){
    let millis = Math.floor(end-start);
    let seconds = Math.floor(millis/1000);
    let mins = Math.floor(seconds/60);
    let hours = Math.floor(mins/60);
    let days = Math.floor(hours/24);

    hours = hours - (days*24);
    mins = mins - (days*24*60) - (hours*60);
    seconds = seconds - (days*24*60*60) - (hours*60*60) - (mins*60);

    return{
        rDays: days,
        rHours: hours,
        rMinutes: mins,
        rSeconds: seconds
    };
}

let timer = setInterval(() => {
    const startDate = new Date();
    // const endDate = new Date("December 01, 2021 12:00:00");

    let timeDiffObj = getTimeDiff(startDate,endDate);

    if(startDate === endDate){
        clearInterval(timer);
    }
    if(timeDiffObj.rDays < 10){
        dayEl.textContent = `0${timeDiffObj.rDays}`;
    }else{
        dayEl.textContent = timeDiffObj.rDays;
    }
    if(timeDiffObj.rHours < 10){
        hourEl.textContent = `0${timeDiffObj.rHours}`;
    }else{
        hourEl.textContent = timeDiffObj.rHours;
    }
    if(timeDiffObj.rMinutes < 10){
        minuteEl.textContent = `0${timeDiffObj.rMinutes}`;
    }else{
        minuteEl.textContent = timeDiffObj.rMinutes;
    }
    if(timeDiffObj.rSeconds < 10){
        secondEl.textContent = `0${timeDiffObj.rSeconds}`;
    }else{
        secondEl.textContent = timeDiffObj.rSeconds;
    }
}, 1000);
