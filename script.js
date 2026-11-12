
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

gsap.from(".company .trigger1", {
   y: 150,
   duration: 1,
   opacity: 0,
   scrollTrigger: {
      trigger: ".company .trigger1",
      start: "top 80%"
   }
})
gsap.from(".company .trigger2", {
   y: 150,
   duration: 1,
   delay: 0.5,
   opacity: 0,
   scrollTrigger: {
      trigger: ".company .trigger1",
      start: "top 80%"
   }
})
gsap.from(".company .trigger3", {
   y: 150,
   duration: 1,
   delay: 1,
   opacity: 0,
   scrollTrigger: {
      trigger: ".company .trigger1",
      start: "top 80%"
   }
})