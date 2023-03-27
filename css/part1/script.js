gsap.registerPlugin(ScrollTrigger);

gsap.to(".a", {
  scrollTrigger: {
    trigger: ".a",
    toggleActions: "play pause reverse restart",
    start: "center bottom",
    end: "center 70%",
    scrub: 1,
  },
  x: 0,
  y: 0,
  rotation: 360,
  duration: 1,
});

gsap.from(".b", {
  scrollTrigger: {
    trigger: ".b",
    toggleActions: "play pause reverse restart",
    start: "center bottom",
    end: "center 70%",
    scrub: 1,
    markers: true,
  },
  x: 200,
  rotation: 360,
  duration: 1,
});

gsap.to(".c", {
  scrollTrigger: {
    start: "top center", //"20px 80%""
    trigger: ".c",
    toggleActions: "play none none reverse",
    scrub: 2,
    markers: true,
  },
  x: 400,
  rotation: 360,
  duration: 3,
});

gsap.to(".d", {
  scrollTrigger: {
    start: "top center", //"20px 80%""
    trigger: ".d",
    toggleActions: "play none none reverse",
    scrub: 2,
    markers: true,
  },
  x: 400,
  rotation: 360,
  duration: 3,
});

//들어, 나가, 뒤로, 재설정
