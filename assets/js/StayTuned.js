//Stay Tuned code 
var countDownBegin = new Date("May 18, 2024 08:30:00").getTime();
var countDownFinish = new Date("May 19, 2024 16:00:00").getTime();
var registrationDate = new Date("May 6, 2024 20:00:00").getTime();
var registrationDatedead = new Date("May 13, 2024 08:00:00").getTime();

var x = setInterval(function() {
    const width = $( window ).width();
    var now = new Date().getTime();

    var distanceBegin = countDownBegin - now;
    var distanceFinish = countDownFinish - now;
    var registrationdistance = registrationDate - now;
    var registrationdistancedead = registrationDatedead - now;

    if (distanceBegin < 0 && distanceFinish < 0) {
        clearInterval(x);
        const width = $( window ).width();
        var y = setInterval(function() {
            var now = new Date().getTime();
            /////
            var checkyear = new Date().getFullYear();
            var countDownnyear = new Date("May 19, "+(checkyear+1)+" 16:00:00").getTime();
            var distancenyear = countDownnyear - now;
            var daysfornyear = Math.floor(distancenyear/ (1000 * 60 * 60 * 24));
            var nextyear = daysfornyear < 0 ? checkyear : checkyear + 1;
            /////

            
            document.getElementById("countdown").innerHTML = "<div></div>";
            if(width>719){
                document.getElementById("word-expired").innerHTML = "<div style='font-size: 5.5vw;'>See you at IndabaX "+nextyear+"</div>";
            }
            else {
                document.getElementById("word-expired").innerHTML = "<div style='font-size: 8.51vh;'>See you at IndabaX "+nextyear+"</div>";
            }
        }, 1000);
    } 
    else if (distanceBegin > 0 && distanceFinish > 0){
        var days = Math.floor(distanceBegin / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distanceBegin % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distanceBegin % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distanceBegin % (1000 * 60)) / 1000)  ;

        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes  ;
        seconds = (seconds < 10) ? "0" + seconds : seconds;
        days = (days < 10) ? "0" + days : days;

        if(registrationdistance<0 && registrationdistancedead>0){ 
            if(width>719){
                document.getElementById("word-expired").innerHTML = "<div style='font-size: 5vw;'>Registration is Open!</div>";
            }
            else{
                document.getElementById("word-expired").innerHTML = "<div style='font-size: 10vw;'>Registration is Open!</div>";
            }
        }
        else{ 
            if(width>719){
                document.getElementById("word-expired").innerHTML = "<div style='font-size: 7vw;'>Stay Tuned</div>";
            }
            else{
                document.getElementById("word-expired").innerHTML = "<div style='font-size: 10vw;'>Stay Tuned</div>";
            }
        }
        
        document.getElementById("countdown").innerHTML = "<div style='font-size: 15vh;font-weight:600;'>" + days + "<br><p style='font-size: 6vh;'>Days</p></div><br>"
        + "<div style='font-size: 12.5vh;'>" + hours + "<br><p style='font-size: 5vh;'>Hrs</p></div>"
        + "<div style='font-size: 12.5vh;'> :" + minutes + "<br><p style='font-size: 5vh;'>Mn</p></div>"
        + "<div style='font-size: 12.5vh;'> :" + seconds + "<br><p style='font-size: 5vh;'>Sec</p></div>";
    }

    else  {
        var counter = now - countDownBegin;
        var days = Math.floor( counter / (1000 * 60 * 60 * 24));
        var hours = Math.floor((counter % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((counter % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((counter % (1000 * 60)) / 1000);
        var countdays = days + 1;
        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes  ;
        seconds = (seconds < 10) ? "0" + seconds : seconds;
        days = (days < 10) ? "0" + days : days;

        document.getElementById("countdown").innerHTML = "<div style='font-size: 15vh;font-weight:600;'>" + days + "<br><p style='font-size: 6vh;'>Days</p></div><br>"
        + "<div style='font-size: 12.5vh;'>" + hours + "<br><p style='font-size: 5vh;'>Hrs</p></div>"
        + "<div style='font-size: 12.5vh;'> :" + minutes + "<br><p style='font-size: 5vh;'>Mn</p></div>"
        + "<div style='font-size: 12.5vh;'> :" + seconds + "<br><p style='font-size: 5vh;'>Sec</p></div>";

        if(width>719){
            document.getElementById("word-expired").innerHTML = "<div style='font-size: 6vw;'>IndabaX Tunisia Day "+ countdays +"</div>";
        }
        else{
            document.getElementById("word-expired").innerHTML = "<div style='font-size: 10vw;'>IndabaX Tunisia Day "+ countdays +"</div>";
        }
    } 

}, 1000);
