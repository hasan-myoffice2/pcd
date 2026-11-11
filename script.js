
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

gsap.from(".", {
   y: 500,
   duration: 1,
})

