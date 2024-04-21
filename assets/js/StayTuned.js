//Stay Tuned code 
var countDownDate = new Date("April 18, 2024 08:30:00").getTime();

var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    console.log(distance)
    if (distance < 0) {
        document.getElementById("countdown").innerHTML = "<div style='font-size: 12vh;font-weight:600;'>" + "00" + "<br><p style='font-size: 6vh;'>Days</p></div><br>"
        + "<div style='font-size: 9.5vh;'>" + "00" + "<br><p style='font-size: 5vh;'>Hrs</p></div>"
        + "<div style='font-size: 9.5vh;'> :" + "00" + "<br><p style='font-size: 5vh;'>Mn</p></div>"
        + "<div style='font-size: 9.5vh;'> :" + "00" + "<br><p style='font-size: 5vh;'>Sec</p></div>";
        document.getElementById("word-expired").innerHTML = "<div style='font-size: 9.5vh;'>EXPIRED</div>";
        clearInterval(x);
    } else {
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdown
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    days = (days < 10) ? "0" + days : days;

    document.getElementById("countdown").innerHTML = "<div style='font-size: 12vh;font-weight:600;'>" + days + "<br><p style='font-size: 6vh;'>Days</p></div><br>"
    + "<div style='font-size: 9.5vh;'>" + hours + "<br><p style='font-size: 5vh;'>Hrs</p></div>"
    + "<div style='font-size: 9.5vh;'> :" + minutes + "<br><p style='font-size: 5vh;'>Mn</p></div>"
    + "<div style='font-size: 9.5vh;'> :" + seconds + "<br><p style='font-size: 5vh;'>Sec</p></div>";


    /*
    document.getElementById("countdown").innerHTML = "<div>" + days + "d " + hours + "h "
    + minutes + "m " + seconds + "s </div>";*/
    }

}, 1000);
