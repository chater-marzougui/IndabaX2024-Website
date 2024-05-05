/** @format */

var loader = document.querySelector(".loader")

window.addEventListener("load", vanish);

function vanish() {
    
        loader.classList.add("disppear");

        // Add event listener for transition end after class is added
        window.addEventListener("transitionend", removeCode);
    setTimeout(function() {
    const svg = document.getElementById("svg");
    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflowY = "visible";
      },
    });
    
    //landing part
    const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
    const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";
    tl.to(svg, {
      duration: 0.8,
      attr: { d: curve },
      ease: "power2.easeIn",
    }).to(svg, {
      duration: 0.8,
      attr: { d: flat },
      ease: "power2.easeOut",
    });
    tl.to(".loader-wrap", {
      y: -1500,
    });
    tl.to(".loader-wrap", {
      zIndex: -1,
      display: "none",
      duration:0.1,
    });
    tl.from(
      "#hero, #Navbar",
      {
        opacity: 0,
      },
      "-=0.1"
    ).to(
      "#hero, #Navbar",
      {
        opacity: 1,
      },
      "+=1.5"
    );
  }, 1);
} 

function removeCode() {
    while (loader.hasChildNodes()) {
      loader.removeChild(loader.firstChild);
    }
}


var RcountDownDate = new Date("May 6, 2024 08:00:00").getTime();
function togglepopup() {
  var now = new Date().getTime();
  var distance = RcountDownDate - now;

  
  if (distance > 0) {
      document.getElementById("popup").classList.toggle("active");
  }
  else{
    if (document.getElementById("popup").classList.contains("active") && distance <= 0) {
      document.getElementById("popup").classList.toggle("active");
    } else {
      window.open("https://forms.gle/21TWeVBLsu2optmAA", "_blank");
    }
  }
}

function toggleFAQpopup() {
  document.getElementById("FAQpopup").classList.toggle("active");
}
