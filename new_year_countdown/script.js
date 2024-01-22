const targetYear = new Date().getFullYear() + 1;
function updateCountdown() {
    const currentDate = new Date();
    const timeDifference = new Date(targetYear, 0, 1) - currentDate;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));//1000毫秒=1秒*60*60*24=一天
    const hous = Math.floor(timeDifference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)); //取剩下的時間,在/小時
    const minutes = Math.floor(timeDifference % (1000 * 60 * 60) / (1000 * 60))
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    $('#days').text(days);
    $('#hours').text(hous);
    $('#minutes').text(minutes);
    $('#seconds').text(seconds);
}
setInterval(updateCountdown, 1000);

updateCountdown();
