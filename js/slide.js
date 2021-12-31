var container = document.querySelector('.container_slide');
var slide = document.querySelector('.slides');
var next = document.querySelector('.next');
var prev = document.querySelector('.prev');
var slides = document.querySelectorAll('.item');
var slide_Width = slides[0].clientWidth;
var index = 1;
var firstClone = slides[0].cloneNode(true);
var lastClone = slides[slides.length - 1].cloneNode(true);
firstClone.id = 'firstClone';
lastClone.id = 'lastClone';
slide.append(firstClone);
slide.prepend(lastClone);
const interval = 5000;
var slide_in;
slide.style.transform = `translateX(-${index*slide_Width}px)`;

const start = ()=>{
   slide_in = setInterval(() => {
        moveNextBtn();
    }, interval);
}
const moveNextBtn = ()=>{
    if (index >= slides.length - 1 ) return;
    index++;
    slide.style.transform = `translateX(-${index*slide_Width}px)`;
    slide.style.transition =`0.5s`;
}
const movePrevBtn = ()=>{
    if (index <= 0 ) return;
    index--;
    slide.style.transform = `translateX(-${index*slide_Width}px)`;
    slide.style.transition =`0.5s`;
}
// next
next.addEventListener("click",moveNextBtn);
// prev
prev.addEventListener("click",movePrevBtn);
slide.addEventListener("transitionend",()=>{
    slides = document.querySelectorAll('.item');
    if (slides[index].id == firstClone.id) {
        index =  1;  // để = 1
        slide.style.transform = `translateX(-${index*slide_Width}px)`;
        slide.style.transition =`none`;
    }
    if (slides[index].id == lastClone.id) {
        index = slides.length - 2;
         slide.style.transform = `translateX(-${index*slide_Width}px)`;
         slide.style.transition =`none`;
     }
});
container.addEventListener("mousemove",()=>{
    clearInterval(slide_in);
});
container.addEventListener("mouseleave",start);
start();