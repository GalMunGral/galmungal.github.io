let index = 0;
function scrollTo(i) {
  document.body.scrollLeft = i * window.innerWidth;
}
function snap() {
  let targetIndex = Math.round(document.body.scrollLeft / window.innerWidth);
  let targetLeft = targetIndex * window.innerWidth;
  // document.body.scrollLeft = targetLeft;

  if (Math.abs(document.body.scrollLeft - targetLeft) < 50) {
    document.body.scrollLeft = targetLeft;
    index = targetIndex;
  } else {
    let left = document.body.scrollLeft * 0.8 + targetLeft * 0.2;
    document.body.scrollLeft = left;
    window.requestAnimationFrame(snap);
  }
}
window.addEventListener('scroll', _.debounce(snap, 1500));
window.addEventListener('keydown', e => {
  switch(e.key) {
    case 'ArrowLeft':
      e.preventDefault();
      if (--index < 0) index = 0;
      document.body.scrollLeft = index * window.innerWidth;
      break;
    case 'ArrowRight':
      e.preventDefault();
      if (++index > 3) index = 3;
      document.body.scrollLeft = index * window.innerWidth;
      break;
    default:
  }
})

document.body.onload = function() {
  let hints = document.querySelectorAll('.hint');
  
  document.querySelectorAll('img.fullscreen').forEach(img => {
    let description = img.parentNode.querySelector('.description');
    
    let link = description.querySelector('h1');
    let url = link.getAttribute('href');
    link.addEventListener('click', () => window.open(url));

    function showDescription() {
      img.classList.add('blurred');
      description.classList.remove('hidden');
      hints.forEach(h => h.style.visibility = 'hidden');
      setTimeout(() => {
        img.classList.remove('blurred');
        description.classList.add('hidden');
        hints.forEach(h => h.style.visibility = 'visible');
      }, 3000);
    }

    img.parentNode.addEventListener('click', _.debounce(showDescription, 200)); 
  });
}
