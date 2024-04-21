
const descriptionPanel = document.querySelector('.description-panel');
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".hackathon-panel:not(.description-panel)").forEach((panel, i) => {
    ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        endTrigger: "#poster-session",
        end: "top bottom",
        pin: true,
        pinSpacing: false
    });
});
const pinDescriptionPanel = gsap.to(descriptionPanel, {
    scrollTrigger: {
        trigger: descriptionPanel,
        start: "top top",
        endTrigger: "#poster-session",
        end: "top bottom",
        pin: true,
        pinSpacing: false,
    },
});