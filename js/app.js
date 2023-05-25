let tl = gsap.timeline(
  {
    scrollTrigger: {
      trigger: '.img-gsap-1',
      trigger: '.text-gsap-1',
      pin: true,
      start: 'top center',
      end: '+=90',
      scrub: 5,
    },
    snap: {
      duration: { min: 0.5, max: .1 }, 
      ease: "power1.inOut" 
    },
    
  }
);



let tl2 = gsap.timeline(
  {
    scrollTrigger: {
      trigger: '.img-gsap-2',
      trigger: '.text-gsap-2',
      start: 'top center',
      end: '+=90',
      delay: 0.2,
      scrub: 5,
    },
    snap: {
      duration: { min: 0.5, max: .1 }, 
      ease: "power1.inOut" 
    }
  }
);

let tl3 = gsap.timeline(
  {
    scrollTrigger: {
      trigger: '.img-gsap-3',
      trigger: '.text-gsap-3',
      start: 'top center',
      end: '+=90',
      delay: 0.8,
      scrub: 5,
    },
    snap: {
      duration: { min: 0.5, max: .1 }, 
      ease: "power1.inOut" 
    }
  }
);

let tl4 = gsap.timeline(
  {
    scrollTrigger: {
      trigger: '.img-gsap-4',
    },
  }
);

tl.addLabel("start")
  .fromTo('.img-gsap-1', 0.5, { x: '-100%',opacity: 0 }, { x: 0, opacity: 1 })
  .fromTo('.text-gsap-1', 0.6, { y: '100', opacity: 0 }, { y: 0, opacity: 1 })

tl2.addLabel("start")
  .fromTo('.img-gsap-2', 0.7, { scale: 0 }, { scale: 1, ease: 'elastic.out(0.5, 2)', duration: 1 })
  .fromTo('.text-gsap-2', 1, { y: '50', opacity: 0 }, { y: 0, opacity: 1 })

tl3.addLabel("start")
  .fromTo('.img-gsap-3', 0.5, { x: '-100%',opacity: 0 }, { x: 0, opacity: 1 })
  .fromTo('.text-gsap-3', 0.3, { y: '-50', opacity: 0 }, { y: 0, opacity: 1 })

tl4.addLabel("start")
  .fromTo('.img-gsap-4', 0.7, { y: 0 }, { y: -20, yoyo: true, repeat: -1 })



