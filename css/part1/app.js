// gsap.to(".logo", {
//   duration: 2,
//   x: 300,
//   backgroundColor: "#560563",
//   borderRadius: "20%",
//   border: "5px solid white",
//   ease: "bounce",
// });

//회전

// gsap.set(".logo, .astronaut", { transfromOrigin: "50% 50%" });
// gsap.to(".logo, .astronaut", { duration: 20, rotation: 360 });

// var myObject = { rotation: 0 };
// gsap.to(myObject, {
//   duration: 20,
//   rotation: 360,
//   onUpadate: function () {
//     console.log(myObject.rotation);
//   },
// });

gsap.from(".logo", { duration: 1.5, opacity: 0, scale: 0.3, ease: "back" });
gsap.from(".circle", {
  duration: 1,
  opacity: 0,
  y: "-200,200",
  stagger: 0.25,
});
