const navbarMenu = document.getElementById("menu");
const burgerMenu = document.getElementById("burger");
const headerMenu = document.getElementById("header");

// Open Close Navbar Menu on Click Burger
if (burgerMenu && navbarMenu) {
   burgerMenu.addEventListener("click", () => {
      burgerMenu.classList.toggle("is-active");
      navbarMenu.classList.toggle("is-active");
	  $('.nav-toggle').toggleClass("active");
   });
}

// Close Navbar Menu on Click Menu Links
document.querySelectorAll(".menu1-link").forEach((link) => {
   link.addEventListener("click", () => {
      burgerMenu.classList.remove("is-active");
      navbarMenu.classList.remove("is-active");
   });
});

// Change Header Background on Scrolling
// window.addEventListener("scroll", () => {
//    if (this.scrollY >= 85) {
//       headerMenu.classList.add("on-scroll");
//    } else {
//       headerMenu.classList.remove("on-scroll");
//    }
// });





if (!navbarMenu.classList.contains('is-active')) {
   var header = document.querySelector('.header1');

   ScrollTrigger.create({
      start: 'top -50',
      end: 99999,
      markers: false,
      toggleClass: { className: 'jwpnavbar--scrolled', targets: '.header1' }
   });

   ScrollTrigger.create({
      start: 'top -300',
      end: 99999,
      toggleClass: { className: 'jwpnavbar--up', targets: '.header1' },
      onUpdate: ({ direction }) => {
         if (direction == -1) {
            header.classList.remove('jwpnavbar--up');
         } else {
            header.classList.add('jwpnavbar--up');
         }
      }
   });

   gsap.to('.header1', {
      color: '#fff',
      scrollTrigger: {
         trigger: '.header1',
         start: 'top -150',
         scrub: true
      }
   });
}

window.addEventListener('scroll', function() {
   const sections = document.querySelectorAll('section');
   const navLinks = document.querySelectorAll('.menu1-link');
   
   let currentSection = 'c';
   sections.forEach(section => {
     const sectionTop = section.offsetTop;
     const sectionHeight = section.clientHeight;
     let scrollPosition = window.scrollY || window.pageY;
     
     if (isNaN(scrollPosition)) {
      currentSection = "hero"; 
      }
      
     scrollPosition+=20; 
     if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
         currentSection = section.id;
         if (currentSection === "five") {
             currentSection = "hero"; 
         }
         else if (currentSection === "") {
             currentSection = "hero";
         }
         else if (currentSection === "pre-footer") {
            currentSection = "Location-Section";
        }
        else if (currentSection === "stay-tuned") {
         currentSection = "poster-session"; 
     }
     }
   });
   navLinks.forEach(link => {
     link.classList.remove('active'); // Remove 'active' class from all links
     if (link.getAttribute('href').substring(1) === currentSection) {
       link.classList.add('active'); // Add 'active' class to the link corresponding to the current section
     }
   });
 });