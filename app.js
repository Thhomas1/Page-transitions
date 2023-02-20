const tlLeave = gsap.timeline({
    defaults: {duration: 0.75, ease: "Power2.easeOut"},
});
const tlEnter = gsap.timeline({
    defaults: {duration: 0.75, ease: "Power2.easeOut"},
});

// Funciones para el leave y enter animationeeeee

const leaveAnimation = (current, done) => {
    const product = current.querySelector(".image-container");
    const text = current.querySelector(".showcase-text");
    const circles = current.querySelectorAll(".circle");
    const arrow = current.querySelector(".showcase-arrow");

    return (
        tlLeave.fromTo(arrow, {opacity: 1, y: 0}, {opacity: 0, y: 50}),
        tlLeave.fromTo(product, { y: 0,opacity: 1,}, { y: 100, opacity: 0, onComplete: done}, "<"
        ),
        tlLeave.fromTo(text, {y: 0, opacity:1}, {opacity: 0, y:100}, "<"),
        tlLeave.fromTo(circles, {y: 0, opacity:1}, {opacity: 0, y:-200, stagger: 0.15, ease: "back.out(1.7)", duration: 1,}, "<"
        )
    );
};
const enterAnimation = (current, done, gradient) => {
    const product = current.querySelector(".image-container");
    const text = current.querySelector(".showcase-text");
    const circles = current.querySelectorAll(".circle");
    const arrow = current.querySelector(".showcase-arrow");
    return (
      tlEnter.fromTo(
        arrow,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, onComplete: done }
      ),
      tlEnter.to("body", { background: gradient }, "<"),
      tlEnter.fromTo(product, { y: -100, opacity: 0 }, { y: 0, opacity: 1 }, "<"),
      tlEnter.fromTo(text, { y: 100, opacity: 0 }, { opacity: 1, y: 0 }, "<"),
      tlEnter.fromTo(circles,{ y: -200, opacity: 0 },{y: 0, opacity: 1, stagger: 0.15,ease: "back.out(1.7)",duration: 1},"<"
      )
    );
  };
  
// animaciones

barba.init ({
    preventRunning: true,
    transitions: [
        //showcase  
        {
            name: "default",
            leave(data) {
                const done = this.async();
                let current = data.current.container;
                leaveAnimation(current, done);
               // gsap.fromTo(current, {opacity: 1}, {opacity:0, duration: 1, onComplete: done});
            },
            enter(data){
                const done = this.async();
                let next = data.next.container;
                enterAnimation(next, done);
                // gsap.fromTo(next, {opacity: 0}, {opacity:0, duration: 1,  onComplete: done});
            },
        },
    ],
});