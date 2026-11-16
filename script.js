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


// Portfolios Animate

gsap.from(".portfolioTitle", {
   y: 200,
   opacity: 0,
   duration: 0.8,
   stagger: 0.2,
   ease: "power2.out",

   scrollTrigger: {
      trigger: ".portfolioTitle",
      start: "top 80%",
      toggleActions: "play none none reverse",
   }
});

gsap.from('.Fimage', {
   x: -350,
   duration: 1,
   scrollTrigger: {
      trigger: ".portfolioTitle",
      start: "top 80%",
      toggleActions: "play none none reverse",
   }
})
gsap.from('.Simage', {
   y: 250,
   scale: 0,
   duration: 1.6,
   scrollTrigger: {
      trigger: ".portfolioTitle",
      start: "top 80%",
      toggleActions: "play none none reverse",
   }
})
gsap.from('.Timage', {
   y: 350,
   duration: 1.8,
   scrollTrigger: {
      trigger: ".portfolioTitle",
      start: "top 80%",
      toggleActions: "play none none reverse",
   }
})

// Why Chooce section
gsap.from(".benifitTitle", {
   x: -300,
   opacity: 0,
   duration: 1.5,
   stagger: 0.1,
   ease: "power2.out",

   scrollTrigger: {
      trigger: ".benifitTitle",
      start: "top 80%",
      toggleActions: "play none none reverse",
   }
});
gsap.from(".benifit", {
   x: 300,
   opacity: 0,
   duration: 1.5,
   stagger: 0.1,
   ease: "power2.out",

   scrollTrigger: {
      trigger: ".benifit",
      start: "top 80%",
      toggleActions: "play none none reverse",
   }
});

// Faq Section Animate
gsap.from(".faq", {
   x: -200,
   opacity: 0,
   duration: 1,
   ease: "power2.out",

   scrollTrigger: {
      trigger: ".faq",
      start: "top 80%",
      toggleActions: "play none none reverse",
   }
});
gsap.from(".accordion", {
   x: 300,
   opacity: 0,
   duration: 1.5,
   ease: "power2.out",

   scrollTrigger: {
      trigger: ".accordion",
      start: "top 80%",
      toggleActions: "play none none reverse",
   }
});

// Our Process Animate
gsap.from('.process', {
   y: 250,
   duration: 1,
   stagger: 0.2,
   scrollTrigger: {
      trigger: ".process",
      start: "top 80%",
      toggleActions: "play none none reverse",
   }
})
gsap.from('.proCard', {
   y: 250,
   opacity: 0,
   duration: 1,
   stagger: -0.3,
   scrollTrigger: {
      trigger: ".process",
      start: "top 80%",
      toggleActions: "play none none reverse",
   }
})
gsap.from('.ProLine', {
   scale: 0,
   duration: 1.5,
   delay: 2,
   stagger: 0.3,
   scrollTrigger: {
      trigger: ".ProLine",
      start: "top 80%",
      toggleActions: "play none none reverse",
   }
})
gsap.from('.spin', {
   scale: 0,
   duration: 0.5,
   delay: 2,
   stagger: 0.3,
   scrollTrigger: {
      trigger: ".spin",
      start: "top 80%",
      toggleActions: "play none none reverse",
   }
})
gsap.from('.expertise .title', {
   y: 250,
   duration: 1,
   stagger: 0.3,
   scrollTrigger: {
      trigger: ".expertise .title",
      start: "top 80%",
      toggleActions: "play none none reverse",
   }
})
gsap.from('.expertise .image1', {
   duration: 1,
   x: 250,
   rotate: 360,
   opacity: 0,
   scale: 0,
   scrollTrigger: {
      trigger: ".expertise .image1",
      start: "top 80%",
      toggleActions: "play none none reverse",
   }
})
gsap.from('.expertise .image2', {
   duration: 1,
   x: 20,
   rotate: 360,
   opacity: 0,
   scale: 0,
   scrollTrigger: {
      trigger: ".expertise .image2",
      start: "top 100%",
      toggleActions: "play none none reverse",
   }
})
gsap.from('.expertise .image3', {
   duration: 2,
   x: -100,
   rotate: -360,
   opacity: 0,
   scale: 0,
   scrollTrigger: {
      trigger: ".expertise .image3",
      start: "top 100%",
      toggleActions: "play none none reverse",
   }
})

// CTA Section Animate
gsap.from('.ctaAnimate', {
   duration: 2,
   rotate: -360,
   opacity: 0,
   scale: 0,
   scrollTrigger: {
      trigger: ".ctaAnimate",
      start: "top 80%",
      toggleActions: "play none none reverse",
   }
})
gsap.from('.ctaTitle', {
   duration: 1,
   x: 300,
   opacity: 0,
   scrollTrigger: {
      trigger: ".ctaTitle",
      start: "top 80%",
      toggleActions: "play none none reverse",
   }
})
gsap.from('.ctaPera', {
   duration: 1,
   x: -300,
   opacity: 0,
   scrollTrigger: {
      trigger: ".ctaPera",
      start: "top 80%",
      toggleActions: "play none none reverse",
   }
})
gsap.from('.animateBtn', {
   duration: 1,
   scale: 0,
   opacity: 0,
   scrollTrigger: {
      trigger: ".animateBtn",
      start: "top 80%",
      toggleActions: "play none none reverse",
   }
})

// Footer Animate
gsap.from('.fooAnimate', {
   y: -300,
   opacity: 0,
   duration: 1.2,
   stagger: 0.3,
   scrollTrigger: {
      trigger: ".fooAnimate",
      start: "top 80%",
      toggleActions: "play none none reverse",
   }
})