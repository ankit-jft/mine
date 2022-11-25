let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');

stopBtn.style.display = "none";

let hour = 00;
let minute = 00;
let second = 00;
let count = 00;

startBtn.addEventListener('click', function () {
    newTime = true;
    stopWatch();
    startBtn.style.display = "none";
    stopBtn.style.display = "initial";
    resetBtn.style.display = "initial";
});

stopBtn.addEventListener('click', function () {
    newTime = false;
    startBtn.style.display = "initial";
    stopBtn.style.display = "none";
});

resetBtn.addEventListener('click', function () {
    newTime = false;
    hour = 0;
    minute = 0;
    second = 0;
    count = 0;
    document.getElementById('hr').innerHTML = "00";
    document.getElementById('min').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";
    document.getElementById('count').innerHTML = "00";
});

function stopWatch() {
    if (newTime) {
        count++;
        if(count == 99){
            second++;
            count = 0;
        }
        if (second == 59) {
            minute++;
            second = 0;
        }
        if (minute == 59) {
            hour++;
            minute = 0;
            second = 0;
        }

        let hrString = hour; document.getElementById('hr').innerHTML = "00";
        let minString = minute;
        let secString = second;
        let countString = count;

        if (hour < 10) {
            hrString = "0" + hrString;
        }
        if (minute < 10) {
            minString = "0" + minString;
        }
        if (second < 10) {
            secString = "0" + secString;
        }
        if (count < 10){
            countString = "0" + countString;
        }

        document.getElementById('hr').innerHTML = hrString;
        document.getElementById('min').innerHTML = minString;
        document.getElementById('sec').innerHTML = secString;
        document.getElementById('count').innerHTML = countString;
        setTimeout(stopWatch, 10);
    }
}