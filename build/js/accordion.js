const accordionBody1 = document.querySelector('#accordion-body1');
const accordionBody2 = document.querySelector('#accordion-body2');
const accordionBody3 = document.querySelector('#accordion-body3');


const title1 = document.querySelector('#accordion-title-1');

title1.addEventListener('click', () => {
  accordionBody1.classList.toggle('hidden');
  accordionBody1.classList.toggle('block');
});

const title2 = document.querySelector('#accordion-title-2');

title2.addEventListener('click', () => {
  accordionBody2.classList.toggle('hidden');
  accordionBody2.classList.toggle('block');
})

const title3 = document.querySelector('#accordion-title-3');

title3.addEventListener('click', () => {
  accordionBody3.classList.toggle('hidden');
  accordionBody3.classList.toggle('block');
})
