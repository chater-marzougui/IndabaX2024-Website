gsap.registerPlugin(ScrollTrigger);

function LandingPageScrollTrigger() {
	const width = $( window ).width();
	if(width>1080){
		gsap.to('#About-Section', { 
        opacity: 1, duration: 20,
    }); 
    let LandingPageScrollTrigger = gsap.timeline({
        scrollTrigger: {
            trigger: "#ImgWrapper",
            start: "0% 0%",
            end: "300% 0%",
            pin: "#ImgWrapper",
            markers : false,
            scrub: 2,
			snap: {
				duration: 0.5, 
			}
        }
    })
    // LandingPageScrollTrigger
    //   .to('#ImgWrapper #img8', { transform: 'translateZ(2200px)', }, 0)
    //   .from('#codeby a', { y: 130, opacity: 0 }, 0.31)
    //     .to('#codeby a', { y: 0, opacity: 0 }, 2)
    //   .from('#codeby #test', { y: 130, opacity: 0 }, 3)
    //     .to('#codeby #test', { y: 0, opacity: 0 }, 5)
    //   .from('#codeby #test1', { y: 130, opacity: 0 }, 6)
    //     .to('#codeby #test1', { y: 0, opacity: 0 }, 8)
    //   .from('#codeby #test2', { y: 130, opacity: 0 }, 9)
    //     .to('#codeby #test2', { y: 0, opacity: 0 }, 11)
    //   .from('#codeby #test3', { y: 130, opacity: 0 }, 12)
    //     .to('#codeby #test3', { y: 0, opacity: 0 }, 14)
    // .to('#ImgWrapper #img8', { transform: 'translateZ(0px)', }, 15)
  LandingPageScrollTrigger
    .to('#ImgWrapper #img8', { transform: 'translateX(150px)', }, 0)
      .from('#codeby a', { y: 130, opacity: 0 }, 1)
        .to('#codeby a', { x:300 , opacity: 0 }, 4)
      .from('#codeby #test', { y: 130, opacity: 0 }, 6)
        .to('#codeby #test', { x:300, opacity: 0 }, 9)
      .from('#codeby #test1', { y: 130, opacity: 0 }, 11)
        .to('#codeby #test1', {x:300, opacity: 0 }, 14)
      .from('#codeby #test2', { y: 130, opacity: 0 }, 16)
        .to('#codeby #test2', { x:300, opacity: 0 }, 19)
      .from('#codeby #test3, #codeby #test3 a', { y: 130, opacity: 0 }, 21)
        .to('#codeby #test3, #codeby #test3 a', { y: 0, opacity: 1 }, 24)
      // .to('#ImgWrapper #img8', { transform: 'translateZ(0px)', }, 26)

	}
};
        

//---------------------/Landing Page ScrollTrigger---------------------

window.onload = () => {
    LandingPageScrollTrigger();
}