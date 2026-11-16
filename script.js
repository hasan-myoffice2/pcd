
gsap.from("#box1", {
   y: -240,
   duration: 1.5,
   delay: 0.2,
   opacity: 0.1,
   rotate: 300,
   repeat: -1,
   repeatDelay: 1,
})

gsap.from("#box2", {
   x: -240,
   duration: 1.5,
   delay: 0.2,
   opacity: 0.1,
   rotate: -300,
   repeat: -1,
   repeatDelay: 1,
})

gsap.from("#box3", {
   x: 240,
   y: 240,
   duration: 1.5,
   delay: 0.2,
   opacity: 0.1,
   rotate: 360,
   repeat: -1,
   repeatDelay: 1,
})


const tl = gsap.timeline();

tl.from("#heroTitle", {
   y: 150,
   duration: 1,
   stagger: 0.2,
   opacity: 0.1
})


gsap.from(".company .trigger1, .company .trigger2, .company .trigger3", {
   y: 250,
   opacity: 0,
   duration: 1.5,
   stagger: 0.3,
   ease: "power3.out",
   scrollTrigger: {
      trigger: ".company",
      start: "top 80%",
      toggleActions: "play none none none",
   }
})


gsap.from(".heroImage", {
   x: 300,
   scale: 0,
   duration: 1,
})


gsap.registerPlugin(ScrollTrigger);

const servicesTL = gsap.timeline({
   scrollTrigger: {
      trigger: ".services-section",
      start: "top 75%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
   }
});

// Subtitle
servicesTL.from(".services-subtitle", {
   y: 40,
   opacity: 0,
   duration: 0.7,
   ease: "power3.out"
});

// Heading
servicesTL.from(".services-title", {
   y: 50,
   opacity: 0,
   duration: 0.9,
   ease: "power3.out"
}, "-=0.4");

// View All Link
servicesTL.from(".services-link", {
   x: 50,
   opacity: 0,
   duration: 0.7,
   ease: "power3.out"
}, "-=0.6");

// Service Cards
servicesTL.from(".service-card", {
   y: 80,
   opacity: 0,
   scale: 0.9,
   duration: 0.9,
   stagger: 0.2,
   ease: "power3.out"
}, "-=0.3");

// Bottom Text
servicesTL.from(".services-bottom", {
   y: 40,
   opacity: 0,
   duration: 0.9,
   ease: "power3.out"
}, "-=0.3");



// Clint Testimonial

gsap.registerPlugin(ScrollTrigger);
const testimonialTL = gsap.timeline({
   scrollTrigger: {
      trigger: ".testimonial-section",
      start: "top 75%",
      toggleActions: "play none none reverse",
   }
});

testimonialTL.from(".testimonial-subtitle", {
   y: 30,
   opacity: 0,
   duration: 0.7,
   ease: "power3.out"
});

testimonialTL.from(".testimonial-header h2, .testimonial-header > p:last-child", {
   y: 40,
   opacity: 0,
   duration: 0.8,
   stagger: 0.2,
   ease: "power3.out"
}, "-=0.3");

testimonialTL.from(".testimonial-rating", {
   x: -60,
   opacity: 0,
   duration: 0.8,
   ease: "power3.out"
}, "-=0.3");

testimonialTL.from(".testimonial-content", {
   x: 60,
   opacity: 0,
   duration: 0.9,
   ease: "power3.out"
}, "-=0.5");

testimonialTL.from(".testimonial-nav", {
   y: 20,
   opacity: 0,
   duration: 0.6,
   ease: "power3.out"
}, "-=0.4");
