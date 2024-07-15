// GSAP 

var tl = gsap.timeline()


// tl.from(".hero-heading", {
//     y: -25,
//     opacity: 0,
//     duration: 0.3,
//     // delay: 0.5
// })

tl.from(".gsap-logo", {
    y: -25,
    opacity: 0,
    duration: 0.3,
    delay: 0.5
})

tl.from(".gsap-nav", {
    y: -25,
    opacity: 0,
    duration: 0.3,
    stagger: 0.3
})
