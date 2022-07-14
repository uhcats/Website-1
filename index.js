const imageSonia = document.querySelector('.image-sonia');
const imageSonia1 = document.querySelector('.image-sonia.active');

setTimeout(() => {
  imageSonia.classList.add('active');
}, 2000)



const sections = document.querySelectorAll('section');
let currentSectionIndex = 0;
const dots = document.querySelectorAll('.dot');

const tab = []
let count = "";
let isThrottled = false;

document.addEventListener('wheel', function (event) {
  if (isThrottled) return;
  isThrottled = true;
  setTimeout(function () {
    isThrottled = false;
  }, 700);

  const direction = event.wheelDelta < 0 ? 1 : -1;

  scroll(direction);

  dots.forEach(dot => addDot(dot));


})

function addDot(dot) {
  dots[currentSectionIndex].classList.add('active');
  const isClass = dot.classList.contains('active');
  tab.push(isClass);
  count = tab.filter(value => value === true).length;

  function removeClassList() {
    if (currentSectionIndex === 0) {
      return dots[currentSectionIndex + 1].classList.remove('active');
    }
    if (currentSectionIndex === dots.length - 1) {
      return dots[currentSectionIndex - 1].classList.remove('active')
    }
    dots[currentSectionIndex - 1].classList.remove('active');
    dots[currentSectionIndex + 1].classList.remove('active');
  }

  removeClassList();

}

function scroll(direction) {
  if (direction === 1) {
    const isLastSection = currentSectionIndex === sections.length - 1;
    if (isLastSection) return;
  } else if (direction === -1) {
    const firstSection = currentSectionIndex === 0;
    if (firstSection) return;
  }

  currentSectionIndex += direction;

  scrollToCurrentSection();
}




function scrollToCurrentSection() {
  sections[currentSectionIndex].scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
}


const image = document.querySelector('.picture');

const slideList = [{
    img: 'img/slider1.jpg'
  },
  {
    img: 'img/slider2.jpg'
  },
  {
    img: 'img/slider3.jpg'
  }
];

let active = 0;
let time = 3000;

function changeSlide() {
  if (active === slideList.length - 1) {
    active = -1;
  }
  active++;
  image.src = slideList[active].img;
}

setInterval(changeSlide, time);