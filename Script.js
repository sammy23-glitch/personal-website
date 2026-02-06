//smooth fade when page loads
window.addEventListener('load', ()=> {
    document.body.classList.add('loaded');
});
//Highlight active menu
const links = document.querySelectorAll('.nav a');
links.forEach(link => {
    if(link.href === window.location.href){
        link.style.color="#ffd6ff";
    }
});
//scroll animations
const sections = document.querySelectorAll('.section');

const observer= new
IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
    entry.target.classList.add('show');
        }
    });
});
sections.forEach(section=>{
    observer.observe(section);
});
//simple typing effect 
const tittle = document.querySelector('.h1');
const text = tittle.innertext;
tittle.innertext = '';
let index = 0;
function typeEffect(){
    if(index < text.length){
        tittle.innertext += text.charAt(index);
        index++;
        setTimeout(typeEffect, 80);
    }
}
typeEffect();
// Animate skill bars
const fills = document.querySelectorAll(".fill");

fills.forEach(fill => {
    const width = fill.getAttribute("data-width");
    fill.style.width = width;
});


        