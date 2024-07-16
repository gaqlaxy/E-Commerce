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

//Individual Products

function changeImageRed(){
    document.getElementById("image").src = "Banana-pith/Red.jpg";
}
function changeImagePink(){
    document.getElementById("image").src = "Banana-pith/Pink.jpg";
}
function changeImageYellow(){
    document.getElementById("image").src = "Banana-pith/Yellow.jpg";
}
function changeImageGreen(){
    document.getElementById("image").src = "Banana-pith/Green.jpg";
}
function changeImageBlue(){
    document.getElementById("image").src = "Banana-pith/Blue.jpg";
}