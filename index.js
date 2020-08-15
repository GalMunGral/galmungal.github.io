const step = 50; // scroll speed - px per frame
let index = 0;

function setLeftOffset(left) {
  document.body.scrollLeft = left;
}

function scrollTo(i) {
  setLeftOffset(i * window.innerWidth);
}
function snap() {
  const left = document.body.scrollLeft;
  let targetIndex = Math.round(left / window.innerWidth);
  let targetLeft = targetIndex * window.innerWidth;
  // setLeftOffset(targetLeft);

  if (Math.abs(left - targetLeft) < step) {
    // Terminate
    setLeftOffset(targetLeft);
    index = targetIndex;
  } else {
    targetLeft = left + (left - targetLeft > 0 ? -step : step);
    setLeftOffset(targetLeft);
    window.requestAnimationFrame(snap);
  }
}
window.addEventListener('scroll', _.debounce(snap, 50));
window.addEventListener('keydown', e => {
  switch(e.key) {
    case 'ArrowLeft':
      e.preventDefault();
      if (--index < 0) index = 0;
      setLeftOffset(index * window.innerWidth);
      break;
    case 'ArrowRight':
      e.preventDefault();
      if (++index > 3) index = 3;
      setLeftOffset(index * window.innerWidth);
      break;
    default:
  }
})

document.body.onload = function() {
  
  document.querySelectorAll('img.fullscreen').forEach((img, i) => {
    let description = img.parentNode.querySelector('.description');
    
    let link = description.querySelector('h1');
    let url = link.getAttribute('href');
    link.addEventListener('click', () => window.open(url));

    function showDescription() {
      img.classList.add('blurred');
      description.classList.remove('hidden');
      setTimeout(() => {
        img.classList.remove('blurred');
        description.classList.add('hidden');
      }, 3000);
    }

    img.parentNode.addEventListener('click', _.debounce(showDescription, 200)); 
    window.addEventListener('keyup', e => {
      if (e.key === ' ' &&  index === i) showDescription();
    })
  });
}
