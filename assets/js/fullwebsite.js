function LandingPageScrollTrigger(){let e=$(window).width();if(e>719){gsap.to("#About-Section",{opacity:1,duration:20});gsap.timeline({scrollTrigger:{trigger:"#ImgWrapper",start:"0% 0%",end:"300% 0%",pin:"#ImgWrapper",markers:!1,scrub:2}}).to("#ImgWrapper #img8",{transform:"translateX(40%)"},0).from("#codeby a",{y:130,opacity:0},1).to("#codeby a",{x:300,opacity:0},4).from("#codeby #test",{y:130,opacity:0},6).to("#codeby #test",{x:300,opacity:0},9).from("#codeby #test1",{y:130,opacity:0},11).to("#codeby #test1",{x:300,opacity:0},14).from("#codeby #test2",{y:130,opacity:0},16).to("#codeby #test2",{x:300,opacity:0},19)}if(e<719){gsap.to("#About-Section",{opacity:1,duration:20});gsap.timeline({scrollTrigger:{trigger:"#ImgWrapper",start:"0% 0%",end:"300% 0%",pin:"#ImgWrapper",markers:!1,scrub:2}}).to("#ImgWrapper #img8",{transform:"translateX(34%) translateY(-110%)"},0).from("#codeby a",{y:130,opacity:0},1).to("#codeby a",{z:300,opacity:0},4).from("#codeby #test",{y:130,opacity:0},6).to("#codeby #test",{z:300,opacity:0},9).from("#codeby #test1",{y:130,opacity:0},11).to("#codeby #test1",{z:300,opacity:0},14).from("#codeby #test2",{y:130,opacity:0},16).to("#codeby #test2",{z:300,opacity:0},19)}}gsap.registerPlugin(ScrollTrigger),LandingPageScrollTrigger();var countDownBegin=new Date("May 18, 2024 08:30:00").getTime(),countDownFinish=new Date("May 19, 2024 16:00:00").getTime(),registrationDate=new Date("May 6, 2024 20:00:00").getTime(),registrationDatedead=new Date("May 13, 2024 08:00:00").getTime(),x=setInterval(function(){let e=$(window).width();var t=new Date().getTime(),o=countDownBegin-t,i=countDownFinish-t;if(o<0&&i<0){clearInterval(x);let s=$(window).width();setInterval(function(){var e,t=new Date().getTime(),o=new Date().getFullYear(),i=0>Math.floor((new Date("May 19, "+(o+1)+" 16:00:00").getTime()-t)/864e5)?o:o+1;document.getElementById("countdown").innerHTML="<div></div>",s>719?document.getElementById("word-expired").innerHTML="<div style='font-size: 5.5vw;'>See you at IndabaX "+i+"</div>":document.getElementById("word-expired").innerHTML="<div style='font-size: 8.51vh;'>See you at IndabaX "+i+"</div>"},1e3)}else if(o>0&&i>0){var n=Math.floor(o/864e5),a=Math.floor(o%864e5/36e5),r=Math.floor(o%36e5/6e4),l=Math.floor(o%6e4/1e3);a=a<10?"0"+a:a,r=r<10?"0"+r:r,l=l<10?"0"+l:l,n=n<10?"0"+n:n,registrationDate-t<0&&registrationDatedead-t>0?e>719?document.getElementById("word-expired").innerHTML="<div style='font-size: 5vw;'>Registration is Open!</div>":document.getElementById("word-expired").innerHTML="<div style='font-size: 10vw;'>Registration is Open!</div>":e>719?document.getElementById("word-expired").innerHTML="<div style='font-size: 7vw;'>Stay Tuned</div>":document.getElementById("word-expired").innerHTML="<div style='font-size: 10vw;'>Stay Tuned</div>",document.getElementById("countdown").innerHTML="<div style='font-size: 15vh;font-weight:600;'>"+n+"<br><p style='font-size: 6vh;'>Days</p></div><br><div style='font-size: 12.5vh;'>"+a+"<br><p style='font-size: 5vh;'>Hrs</p></div><div style='font-size: 12.5vh;'> :"+r+"<br><p style='font-size: 5vh;'>Mn</p></div><div style='font-size: 12.5vh;'> :"+l+"<br><p style='font-size: 5vh;'>Sec</p></div>"}else{var d=t-countDownBegin,n=Math.floor(d/864e5),a=Math.floor(d%864e5/36e5),r=Math.floor(d%36e5/6e4),l=Math.floor(d%6e4/1e3),c=n+1;a=a<10?"0"+a:a,r=r<10?"0"+r:r,l=l<10?"0"+l:l,n=n<10?"0"+n:n,document.getElementById("countdown").innerHTML="<div style='font-size: 15vh;font-weight:600;'>"+n+"<br><p style='font-size: 6vh;'>Days</p></div><br><div style='font-size: 12.5vh;'>"+a+"<br><p style='font-size: 5vh;'>Hrs</p></div><div style='font-size: 12.5vh;'> :"+r+"<br><p style='font-size: 5vh;'>Mn</p></div><div style='font-size: 12.5vh;'> :"+l+"<br><p style='font-size: 5vh;'>Sec</p></div>",e>719?document.getElementById("word-expired").innerHTML="<div style='font-size: 6vw;'>IndabaX Tunisia Day "+c+"</div>":document.getElementById("word-expired").innerHTML="<div style='font-size: 10vw;'>IndabaX Tunisia Day "+c+"</div>"}},1e3),loader=document.querySelector(".loader");function vanish(){loader.classList.add("disppear"),window.addEventListener("transitionend",removeCode),setTimeout(function(){let e=document.getElementById("svg"),t=gsap.timeline({onComplete(){document.body.style.overflowY="visible"}});t.to(e,{duration:.8,attr:{d:"M0 502S175 272 500 272s500 230 500 230V0H0Z"},ease:"power2.easeIn"}).to(e,{duration:.8,attr:{d:"M0 2S175 1 500 1s500 1 500 1V0H0Z"},ease:"power2.easeOut"}),t.to(".loader-wrap",{y:-1500}),t.to(".loader-wrap",{zIndex:-1,display:"none",duration:.1}),t.from("#hero, #Navbar",{opacity:0},"-=0.1").to("#hero, #Navbar",{opacity:1},"+=1.5")},1)}function removeCode(){for(;loader.hasChildNodes();)loader.removeChild(loader.firstChild)}window.addEventListener("load",vanish);var RcountDownDate=new Date("May 6, 2024 20:00:00").getTime();function togglepopup(){var e=new Date().getTime(),t=RcountDownDate-e;t<0?document.getElementById("popup").classList.toggle("active"):document.getElementById("popup").classList.contains("active")&&t<=0?document.getElementById("popup").classList.toggle("active"):window.open("https://forms.gle/LTQrw59pus1jWPaC7","_blank")}function toggleFAQpopup(){document.getElementById("FAQpopup").classList.toggle("active")}const descriptionPanel=document.querySelector(".description-panel"),widthp=window.innerWidth;gsap.registerPlugin(ScrollTrigger),widthp<=768&&(gsap.utils.toArray(".hackathon-panel.red").forEach((e,t)=>{ScrollTrigger.create({trigger:e,start:"top top",endTrigger:".hackathon-panel.last-panel",end:"top bottom",pin:!0,pinSpacing:!1})}),gsap.to(descriptionPanel,{scrollTrigger:{trigger:descriptionPanel,start:"top top",endTrigger:".hackathon-panel.last-panel",end:"top bottom",pin:!0,pinSpacing:!1}})),widthp>768&&(gsap.utils.toArray(".hackathon-panel:not(.description-panel)").forEach((e,t)=>{ScrollTrigger.create({trigger:e,start:"top top",endTrigger:"#speaker-section",end:"top bottom",pin:!0,pinSpacing:!1})}),gsap.to(descriptionPanel,{scrollTrigger:{trigger:descriptionPanel,start:"top top",endTrigger:"#speaker-section",end:"top bottom",pin:!0,pinSpacing:!1}}));const navbarMenu=document.getElementById("menu"),burgerMenu=document.getElementById("burger"),headerMenu=document.getElementById("header"),closeBtn=document.querySelector(".close-menu");if(burgerMenu&&navbarMenu&&burgerMenu.addEventListener("click",()=>{burgerMenu.classList.toggle("is-active"),navbarMenu.classList.toggle("is-active"),document.getElementById("menu1-block"),$(".nav-toggle").toggleClass("active")}),closeBtn.addEventListener("click",function(){menu.classList.remove("is-active"),document.getElementById("menu1-block")}),document.querySelectorAll(".menu1-link").forEach(e=>{e.addEventListener("click",()=>{burgerMenu.classList.remove("is-active"),navbarMenu.classList.remove("is-active")})}),!navbarMenu.classList.contains("is-active")){var e=document.querySelector(".header1");ScrollTrigger.create({start:"top -50",end:99999,markers:!1,toggleClass:{className:"jwpnavbar--scrolled",targets:".header1"}}),ScrollTrigger.create({start:"top -300",end:99999,toggleClass:{className:"jwpnavbar--up",targets:".header1"},onUpdate({direction:t}){-1==t?e.classList.remove("jwpnavbar--up"):e.classList.add("jwpnavbar--up")}}),gsap.to(".header1",{color:"#fff",scrollTrigger:{trigger:".header1",start:"top -150",scrub:!0}})}function togglepopupspeaker1(){var e=document.getElementById("dialog");e.classList.toggle("active"),e.classList.contains("active")?(e.showModal(),document.body.style.overflow="hidden"):(e.close(),document.body.style.overflow="")}function togglepopupspeaker2(){var e=document.getElementById("dialog2");e.classList.toggle("active"),e.classList.contains("active")?(e.showModal(),document.body.style.overflow="hidden"):(e.close(),document.body.style.overflow="")}function togglepopupspeaker6(){var e=document.getElementById("dialog6");e.classList.toggle("active"),e.classList.contains("active")?(e.showModal(),document.body.style.overflow="hidden"):(e.close(),document.body.style.overflow="")}function togglepopupspeaker7(){var e=document.getElementById("dialog7");e.classList.toggle("active"),e.classList.contains("active")?(e.showModal(),document.body.style.overflow="hidden"):(e.close(),document.body.style.overflow="")}function togglepopupspeaker8(){var e=document.getElementById("dialog8");e.classList.toggle("active"),e.classList.contains("active")?(e.showModal(),document.body.style.overflow="hidden"):(e.close(),document.body.style.overflow="")}function togglepopupspeaker9(){var e=document.getElementById("dialog9");e.classList.toggle("active"),e.classList.contains("active")?(e.showModal(),document.body.style.overflow="hidden"):(e.close(),document.body.style.overflow="")}function togglepopupspeaker10(){var e=document.getElementById("dialog10");e.classList.toggle("active"),e.classList.contains("active")?(e.showModal(),document.body.style.overflow="hidden"):(e.close(),document.body.style.overflow="")}function togglepopupspeaker11(){var e=document.getElementById("dialog11");e.classList.toggle("active"),e.classList.contains("active")?(e.showModal(),document.body.style.overflow="hidden"):(e.close(),document.body.style.overflow="")}function togglepopupspeaker12(){var e=document.getElementById("dialog12");e.classList.toggle("active"),e.classList.contains("active")?(e.showModal(),document.body.style.overflow="hidden"):(e.close(),document.body.style.overflow="")}window.addEventListener("scroll",function(){let e=document.querySelectorAll("section"),t=document.querySelectorAll(".menu1-link"),o="c";e.forEach(e=>{let t=e.offsetTop,i=e.clientHeight,s=window.scrollY+50||window.pageY;s>=t&&s<t+i&&("five"===(o=e.id)?o="hero":""===o?o="hero":"pre-footer"===o?o="Location-Section":"stay-tuned"===o&&(o="poster-session"))}),t.forEach(e=>{e.classList.remove("active"),e.getAttribute("href").substring(1)===o&&e.classList.add("active")})}),$(document).ready(function(){var e;(e=jQuery).fn.timeline=function(){var t={id:e(this),item:e(this).find(".timeline-item"),activeClass:"timeline-item--active"};t.item.eq(0).addClass(t.activeClass),t.item.length;var o,i,s=function(){var o=e(this).scrollTop();t.item.each(function(i){var s=e(this).offset().top,n=e(this).height()+e(this).offset().top;e(this),o+e(window).height()/3.5>=s&&o<n&&(t.item.removeClass(t.activeClass),e(this).addClass(t.activeClass))})};e(window).scroll((o=s,function(){var e=this,t=arguments;clearTimeout(i),i=setTimeout(function(){o.apply(e,t)},100)}))},$("#program-section").timeline()});