let activeIndex = 0;
let nextIndex = 0;
let preprev = 0;

const groups = document.querySelectorAll('.website');
const btn = document.querySelector('.nexter');
const prive = document.querySelector('.privesle');
var nexter = document.querySelector('.nexter');
let intervalId = setInterval(() => {
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
  console.log(activeIndex);
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
});
