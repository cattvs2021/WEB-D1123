gsap.registerPlugin(ScrollTrigger);
const container1 = document.getElementById("container1");
const container2 = document.getElementById("container2");
//const container = document.querySelectorAll("meta");
//console.log(container);

let tl1 = gsap.timeline();
    tl1.from(
        container1,
         {
             autoAlpha: 0,
             duration: 3
        });
let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: container2,
        start: "top 75%",
        end: "bottom bottom", 
        markers: {
            smartColor: "red", 
            endColor: "green", 
            fontSize: "18px", 
            fontWeicht: "bold", 
            indent: 20
        },scrub: true
    }
    
});
tl2.fromTo(
    container2,
    {
        //from state
        autoAlpha: 0,
    },
    {
        //to state
        autoAlpha: 1, 
        duration: 3
    }
)