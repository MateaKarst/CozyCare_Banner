// Timeline
var tl = gsap.timeline();

// Animation
// Title
tl.from(".lvl1", { opacity: 0, x: -100, duration: 2, delay: 2 }) // fade in and appear from the left
  .from(".lvl2", { opacity: 0, x: 100, duration: 2, delay: 3 }, "-=2") // fade in and appear from the right
  .from(".btnWrapper", { opacity: 0, y: -50, duration: 2, ease: "power2.out", delay: 3 }, "-=2") // fade in and appear from the top

  // Button
  .to(".btnWrapper", { y: "+=2", rotation: 3, duration: 0.5, yoyo: true, repeat: -1, ease: "sine.inOut" }) // sway back and forth
  .to(".btnWrapper", {
    x: "+=300",
    y: "-=10",
    duration: 4,
    repeat: 1,
    yoyo: true,
    ease: "sine.inOut",
    onComplete: function () {
      tl.pause(); // pause timeline after second loop

      // Signoff
      gsap.fromTo(".signoff", { rotation: 0 }, { rotation: 360, duration: 0.2 }); // rotate signoff
    },
  });

// Play
tl.play();
