//Stay Tuned code 
var countDownBegin = new Date("May 18, 2024 08:30:00").getTime();
var countDownFinish = new Date("May 19, 2024 17:00:00").getTime();

var x = setInterval(function() {
    var n = 1000;
    var now = new Date().getTime();

    var distanceBegin = countDownBegin - now;
    var distanceFinish = countDownFinish - now;
    
    if (distanceBegin < 0 && distanceFinish < 0) {
        clearInterval(x);
        n=10000;
        var y = setInterval(function() {
        var now = new Date().getTime();
        /////
        var checkyear = new Date().getFullYear();
        var countDownnyear = new Date("May 19, "+(checkyear+1)+" 17:00:00").getTime();
        var distancenyear = countDownnyear - now;
        var daysfornyear = Math.floor(distancenyear/ (1000 * 60 * 60 * 24));
        var nextyear = daysfornyear < 0 ? checkyear : checkyear + 1;
        /////

        
        document.getElementById("countdown").innerHTML = "<div style='font-size: 12vh;font-weight:600;'>" + "00" + "<br><p style='font-size: 6vh;'>Days</p></div><br>"
        + "<div style='font-size: 9.5vh;'>" + "00" + "<br><p style='font-size: 5vh;'>Hrs</p></div>"
        + "<div style='font-size: 9.5vh;'> :" + "00" + "<br><p style='font-size: 5vh;'>Mn</p></div>"
        + "<div style='font-size: 9.5vh;'> :" + "00" + "<br><p style='font-size: 5vh;'>Sec</p></div>";
        document.getElementById("word-expired").innerHTML = "<div style='font-size: 9.5vh;'>See you at IndabaX "+nextyear+"</div>";
        }, n);
    } 
    else if (distanceBegin > 0 && distanceFinish > 0){
    var days = Math.floor(distanceBegin / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distanceBegin % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distanceBegin % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distanceBegin % (1000 * 60)) / 1000);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    days = (days < 10) ? "0" + days : days;
    
    document.getElementById("word-expired").innerHTML = "<div style='font-size: 9.5vh;'>Stay Tuned</div>";

    document.getElementById("countdown").innerHTML = "<div style='font-size: 12vh;font-weight:600;'>" + days + "<br><p style='font-size: 6vh;'>Days</p></div><br>"
    + "<div style='font-size: 9.5vh;'>" + hours + "<br><p style='font-size: 5vh;'>Hrs</p></div>"
    + "<div style='font-size: 9.5vh;'> :" + minutes + "<br><p style='font-size: 5vh;'>Mn</p></div>"
    + "<div style='font-size: 9.5vh;'> :" + seconds + "<br><p style='font-size: 5vh;'>Sec</p></div>";
    }
    else  {
        document.getElementById("countdown").innerHTML = "<div style='font-size: 12vh;font-weight:600;'>" + "00" + "<br><p style='font-size: 6vh;'>Days</p></div><br>"
        + "<div style='font-size: 9.5vh;'>" + "00" + "<br><p style='font-size: 5vh;'>Hrs</p></div>"
        + "<div style='font-size: 9.5vh;'> :" + "00" + "<br><p style='font-size: 5vh;'>Mn</p></div>"
        + "<div style='font-size: 9.5vh;'> :" + "00" + "<br><p style='font-size: 5vh;'>Sec</p></div>";
        document.getElementById("word-expired").innerHTML = "<div style='font-size: 9.5vh;'>Event has Started</div>";
    } 

}, 1000);
