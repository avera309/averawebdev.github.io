var hamburger = document.querySelector('.hamb');
var navlist = document.querySelector('.nav-list');
var link = document.querySelector('.nav-list li');
hamburger.addEventListener('click', function () {
  this.classList.toggle('click');
  navlist.classList.toggle('open');
});
const test = document.querySelector('.websiteimg');
let activeIndex = 0;
let nextIndex = 0;
let preprev = 0;
let stop = true;

/*test.addEventListener('mouseover', (event) => {});
onmouseover = (event) => {
  stop = false;
};
const groups = document.querySelectorAll('.website');
const btn = document.querySelector('.nexter');
const prive = document.querySelector('.privesle');
var nexter = document.querySelector('.nexter');
let intervalId = setInterval(() => {
  if (stop) {
    if (activeIndex + 1 <= 4) {
      groups[activeIndex].dataset.status = 'befor';
      groups[activeIndex + 1].dataset.status = 'active';
      groups[activeIndex + 2].dataset.status = 'after';
    } else if (activeIndex === 4) {
      groups[activeIndex].dataset.status = 'befor';
      groups[activeIndex + 1].dataset.status = 'active';
      groups[0].dataset.status = 'res0';
      groups[1].dataset.status = 'res1';
      groups[2].dataset.status = 'res2';
      groups[3].dataset.status = 'res3';
    } else if (activeIndex === 5) {
      groups[0].dataset.status = 'active';
      groups[1].dataset.status = 'after';
      groups[5].dataset.status = 'priv';
      groups[2].dataset.status = 'priv';
      groups[3].dataset.status = 'priv';
      groups[4].dataset.status = 'priv';
    }
    if (activeIndex <= 4) {
      activeIndex++;
    } else {
      activeIndex = 0;
    }
  }
}, 3000);
nexter.addEventListener('click', function () {
  clearInterval(intervalId);
  if (activeIndex + 1 <= 5) {
    const nextIndex = activeIndex + 1 <= 5 ? activeIndex + 1 : 0;
    groups[activeIndex].dataset.status = 'befor';
    groups[activeIndex + 1].dataset.status = 'active';
    if (activeIndex < 4) {
      groups[activeIndex + 2].dataset.status = 'after';
    }
    activeIndex = nextIndex;
  }
  prive.classList.replace('privesle', 'btndePrivesle');
  if (activeIndex + 1 >= 5) btn.classList.replace('nexter', 'btndeNexter');
});
var prev = document.querySelector('.privesle');
prev.addEventListener('click', function () {
  if (activeIndex - 1 >= 0) {
    const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : 0;
    console.log(groups[nextIndex]);
    if (activeIndex === 4) groups[activeIndex + 1].dataset.status = 'priv';
    groups[activeIndex].dataset.status = 'after';
    groups[activeIndex - 1].dataset.status = 'active';
    if (activeIndex - 3 <= 0) {
      groups[activeIndex + 1].dataset.status = 'priv';
    }
    activeIndex = nextIndex;
  }
  btn.classList.replace('btndeNexter', 'nexter');
  if (activeIndex - 1 <= -1)
    prive.classList.replace('btndePrivesle', 'privesle');
});*/
//awsome-layout
const pre = document.querySelector('pre');
const blob = document.querySelector('.blob');
document.addEventListener('mousemove', (e) => {
  rotateElement(e, pre, blob);
  element(e);
});
function rotateElement(event, element, blobs) {
  const x = event.clientX;
  const y = event.clientY;
  const middleX = window.innerWidth / 2;
  const middleY = window.innerHeight / 2;
  const offsetX = ((x - middleX) / middleX) * 45;
  const offsetY = ((y - middleY) / middleY) * 45;
  element.style.setProperty('--rotateX', -1 * offsetY + 'deg');
  element.style.setProperty('--rotateY', offsetX + 'deg');
  blobs.style.setProperty('--x', x + 'px');
  blobs.style.setProperty('--y', y + 'px');
}
/* */
const track = document.getElementById('image-track');
window.onmouseup = () => {
  //track.dataset.mouseDownAt = '0';
  track.dataset.prevPercentage = track.dataset.percentage;
};
function element(event) {
  //track.dataset.mouseDownAt = e.clientX;
  // console.log(track.dataset.mouseDownAt);
  //if (track.dataset.mouseDownAt === '0') return;
  const x = event.clientX;
  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - x,
    maxDdelta = window.innerWidth * 2;
  const percentage = -25 + (mouseDelta / maxDdelta) * 100,
    nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;

  //  Math.min(nextPercentage, 0);
  // Math.max(nextPercentage, -100);
  // track.dataset.percentage = nextPercentage;
  track.style.transform = `translate(${percentage}%,-50%)`;

  track.animate(
    {
      transform: `translate(${percentage}%,-50%)`,
    },
    { duration: 4000, fill: 'forwards' }
  );
  for (const image of track.getElementsByClassName('image')) {
    const prc = (mouseDelta / maxDdelta) * -200;
    image.style.objectPosition = `${prc}% 50%`;
    console.log(prc);
    image.animate(
      {
        objectPosition: `${100 + percentage}% 50%`,
      },
      {
        duration: 4000,
        fill: 'forwards',
      }
    );
  }
}
