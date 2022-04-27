
const aWatch = document.querySelector('.a_watch');
const goodTime = document.createElement('div');
aWatch.after(goodTime);

function inTime () {
    let
        now = new Date(),
        hour = now.getHours(),
        minute = now.getMinutes(),
        second = now.getSeconds(),
        time = '';
    minute = (minute <10) ? '0' + minute : minute;
    second = (second <10) ? '0' + second : second;
    hour = (hour < 10) ? '0' + hour : hour;

    return time += ' Сейчас ' + hour + ':' + minute + ':' + second;
}

setInterval(() => goodTime.innerHTML = inTime(), 1000);





















































 








