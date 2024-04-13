/** @format */
const svg = document.getElementById("svg");
const tl = gsap.timeline({
  onComplete: () => {
    document.body.style.overflowY = "visible";
  },
});
const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";
/*
tl.from(".loader-wrap-heading h1", {
  delay: 0.5,
  y: 200,
  skewY: 20,
}).to(".loader-wrap-heading h1", {
  delay: 0.5,
  y: -200,
  skewY: 20,
});*/
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
});
tl.from(
  "#hero",
  {
    y: 100,
    opacity: 0,
  },
  "-=1.5"
);
tl.from(
  "#Navbar",
  {
    duration: 1,
    opacity: 0,
  },
  "-=1.2"
);

const buttons = document.querySelectorAll('.btn1, .regbutton , .menu1-block');

gsap.utils.toArray(buttons).forEach((button) => {
  let boundingRect = button.getBoundingClientRect(),
    updateBoundingRect = () => (boundingRect = button.getBoundingClientRect());

  window.addEventListener("resize", updateBoundingRect);
  window.addEventListener("scroll", updateBoundingRect);

  let xTo = gsap.quickTo(button, "x", { duration: 0.8, ease: "power3" }),
    yTo = gsap.quickTo(button, "y", { duration: 0.8, ease: "power3" }),
    leaveTween;
  button.addEventListener("mouseenter", (e) => leaveTween && leaveTween.kill());
  button.addEventListener("mousemove", (e) => {
    const mousePoxX = e.clientX - boundingRect.left;
    const mousePoxY = e.clientY - boundingRect.top;
    xTo((mousePoxX - boundingRect.width / 2) * 0.4);
    yTo((mousePoxY - boundingRect.height / 2) * 0.4);
  });
  button.addEventListener("mouseleave", () => {
    xTo.tween.pause().invalidate();
    yTo.tween.pause().invalidate();
    leaveTween = gsap.to(button, {
      x: 0,
      y: 0,
      duration: 0.8,
      ease: "elastic.out(1,0.3)",
    });
  });
});