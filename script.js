
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