const aboutSlide = document.querySelector('.about-slide');

const aboutCards = document.querySelectorAll('.about-card') ;

/* Buttons */

const prevBtn = document.querySelector('#prev-btn');
const nextBtn = document.querySelector('#next-btn');

// Counter

let counter = 1;

const size = aboutCards[1].clientwidth;

aboutSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

// button listners

nextBtn.addEventListener('click', ()=>{

     aboutSlide.style.transition = 
   /*  counter++; */
   /*  aboutSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'; */
    console.log(counter)
})