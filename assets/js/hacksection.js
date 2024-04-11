gsap
  .timeline({
    scrollTrigger: {
      trigger: ".trigger",
      scrub: 2,
      pin: true,
      markers: false,
      start: "-9% top",
      end: "+=139%",
    },
  })
  .to(".box", {
    force3D: true,
    duration: 1,
    xPercent: 100,
    ease: "power1.inOut",
    stagger: { amount: 1 },
  })
  .to(".box", { ease: "power1.out", duration: 1, rotation: "45deg" }, 0)
  .to(".box", { ease: "power1.in", duration: 1, rotation: "0deg" }, 1)
  .fromTo(
    ".zindi-img",
    {
      y: 20,
    },
    { y: -150 },
    "-=1"
  )
  .to(
    ".content-zindi--hide",
    {
      visibility: "hidden",
      opacity: 0,
      duration: 5,
      ease: "power1.out",
    },
    "-=1"
  )
  .fromTo(
    ".hackathon-zindi",
    { y: -220, ease: "power1.out", duration: 1 },
    { y: 0 },
    "-=6"
  )
  .to(".content-hackathon--hide", { visibility: "visible", opacity: 1 }, "-=5");
