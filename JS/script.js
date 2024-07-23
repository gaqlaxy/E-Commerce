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

// Sticky Navbar 


let sectionHeroEl = document.querySelector(".herosection");
let obs = new IntersectionObserver(function(entries){
  let ent = entries[0]; 
  console.log(ent); 
  if(ent.isIntersecting === false){

    document.body.classList.add("sticky");
  }
  if(ent.isIntersecting === true){

    document.body.classList.remove("sticky");
  }
}, 
{
  root: null,
  threshold: 0,
  rootMargin: "-80px"
})
obs.observe(sectionHeroEl);



// Getting current year 
let year = document.querySelector(".year");
let currentYear = new Date().getFullYear();
console.log(currentYear)
year.textContent = currentYear;
