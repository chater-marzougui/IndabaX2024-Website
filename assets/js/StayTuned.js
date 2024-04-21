//Stay Tuned code 
var countDownDate = new Date("May 18, 2024 08:30:00").getTime();

var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdown
    document.getElementById("countdown").innerHTML = "<div style='font-size: 13vh;font-weight:600;'>" + days + "<br><p style='font-size: 6vh;'>Days</p></div><br>"
    + "<div style='font-size: 9.5vh;'>" + hours + "<br><p style='font-size: 5vh;'>Hrs</p></div>"
    + "<div style='font-size: 9.5vh;'> :" + minutes + "<br><p style='font-size: 5vh;'>Mn</p></div>"
    + "<div style='font-size: 9.5vh;'> :" + seconds + "<br><p style='font-size: 5vh;'>Sec</p></div>";


    /*
    document.getElementById("countdown").innerHTML = "<div>" + days + "d " + hours + "h "
    + minutes + "m " + seconds + "s </div>";*/

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}, 1000);
