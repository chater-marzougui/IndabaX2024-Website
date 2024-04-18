gsap.registerPlugin(ScrollTrigger);

function LandingPageScrollTrigger() {
	const width = $( window ).width();
	if(width>719){
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
  LandingPageScrollTrigger
    .to('#ImgWrapper #img8', { transform: 'translateX(40%)', }, 0)
      .from('#codeby a', { y: 130, opacity: 0 }, 1)
        .to('#codeby a', { x:300 , opacity: 0 }, 4)
      .from('#codeby #test', { y: 130, opacity: 0 }, 6)
        .to('#codeby #test', { x:300, opacity: 0 }, 9)
      .from('#codeby #test1', { y: 130, opacity: 0 }, 11)
        .to('#codeby #test1', {x:300, opacity: 0 }, 14)
      .from('#codeby #test2', { y: 130, opacity: 0 }, 16)
        .to('#codeby #test2', { x:300, opacity: 0 }, 19)
	}
  if(width<719){
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
  LandingPageScrollTrigger
    .to('#ImgWrapper #img8', { transform: 'translateX(34%) translateY(-110%)', }, 0)
    //.to('#ImgWrapper #img8', { transform: '', }, 0)
      .from('#codeby a', { y: 130, opacity: 0 }, 1)
        .to('#codeby a', { z:300 , opacity: 0 }, 4)
      .from('#codeby #test', { y: 130, opacity: 0 }, 6)
        .to('#codeby #test', { z:300, opacity: 0 }, 9)
      .from('#codeby #test1', { y: 130, opacity: 0 }, 11)
        .to('#codeby #test1', {z:300, opacity: 0 }, 14)
      .from('#codeby #test2', { y: 130, opacity: 0 }, 16)
        .to('#codeby #test2', { z:300, opacity: 0 }, 19)

	}

};
        
LandingPageScrollTrigger();