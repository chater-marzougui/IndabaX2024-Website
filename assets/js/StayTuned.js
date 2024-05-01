//Stay Tuned code 
var countDownBegin = new Date("May 18, 2024 08:30:00").getTime();
var countDownFinish = new Date("May 19, 2024 17:00:00").getTime();

var x = setInterval(function() {
    const width = $( window ).width();
    var n = 1000;
    var now = new Date().getTime();

    var distanceBegin = countDownBegin - now;
    var distanceFinish = countDownFinish - now;
    
    if (distanceBegin < 0 && distanceFinish < 0) {
        clearInterval(x);
        n=10000;
        const width = $( window ).width();
        var y = setInterval(function() {
        var now = new Date().getTime();
        /////
        var checkyear = new Date().getFullYear();
        var countDownnyear = new Date("May 19, "+(checkyear+1)+" 17:00:00").getTime();
        var distancenyear = countDownnyear - now;
        var daysfornyear = Math.floor(distancenyear/ (1000 * 60 * 60 * 24));
        var nextyear = daysfornyear < 0 ? checkyear : checkyear + 1;
        /////

        
        document.getElementById("countdown").innerHTML = "<div style='font-size: 15vh;font-weight:600;'>" + "00" + "<br><p style='font-size: 6vh;'>Days</p></div><br>"
        + "<div style='font-size: 12.5vh;'>" + "00" + "<br><p style='font-size: 5vh;'>Hrs</p></div>"
        + "<div style='font-size: 12.5vh;'> :" + "00" + "<br><p style='font-size: 5vh;'>Mn</p></div>"
        + "<div style='font-size: 12.5vh;'> :" + "00" + "<br><p style='font-size: 5vh;'>Sec</p></div>";
        if(width>719){
            document.getElementById("word-expired").innerHTML = "<div style='font-size: 7.5vw;'>See you at IndabaX "+nextyear+"</div>";
        }
        else {
            document.getElementById("word-expired").innerHTML = "<div style='font-size: 9.51vh;'>See you at IndabaX "+nextyear+"</div>";
        }
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
    
    if(width>719){
        document.getElementById("word-expired").innerHTML = "<div style='font-size: 7.5vw;'>Stay Tuned</div>";
    }
    else{
        document.getElementById("word-expired").innerHTML = "<div style='font-size: 12vw;'>Stay Tuned</div>";
    }

    document.getElementById("countdown").innerHTML = "<div style='font-size: 15vh;font-weight:600;'>" + days + "<br><p style='font-size: 6vh;'>Days</p></div><br>"
    + "<div style='font-size: 12.5vh;'>" + hours + "<br><p style='font-size: 5vh;'>Hrs</p></div>"
    + "<div style='font-size: 12.5vh;'> :" + minutes + "<br><p style='font-size: 5vh;'>Mn</p></div>"
    + "<div style='font-size: 12.5vh;'> :" + seconds + "<br><p style='font-size: 5vh;'>Sec</p></div>";
    }
    else  {
        document.getElementById("countdown").innerHTML = "<div style='font-size: 15vh;font-weight:600;'>" + "00" + "<br><p style='font-size: 6vh;'>Days</p></div><br>"
        + "<div style='font-size: 12.5vh;'>" + "00" + "<br><p style='font-size: 5vh;'>Hrs</p></div>"
        + "<div style='font-size: 12.5vh;'> :" + "00" + "<br><p style='font-size: 5vh;'>Mn</p></div>"
        + "<div style='font-size: 12.5vh;'> :" + "00" + "<br><p style='font-size: 5vh;'>Sec</p></div>";
        if(width>719){
            document.getElementById("word-expired").innerHTML = "<div style='font-size: 7.5vw;'>Event has Started</div>";
        }
        else{
            document.getElementById("word-expired").innerHTML = "<div style='font-size: 11vw;'>Event has Started</div>";
        }
    } 

}, 1000);
