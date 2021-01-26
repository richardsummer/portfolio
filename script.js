const sections = document.querySelectorAll('section');
const bubble = document.querySelector('.bubble');
const gradients = [
  "linear-gradient(to right top, #CAC531, #F3F9A7)",
  "linear-gradient(to right top, #667db6, #0082c8, #0082c8, #667db6)",
  "linear-gradient(to right top, #C9D6FF, #E2E2E2)",
  "linear-gradient(to right top, #396afc, #2948ff)",
  "linear-gradient(to right top, #1c92d2, #f2fcfe)",
];

const options = {
  threshold: 0.7
}

let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries){
  entries.forEach(entry => {
    const className = entry.target.className;
    const activeAnchor = document.querySelector(`[data-page=${className}]`);
    const gradientIndex = entry.target.getAttribute('data-index');
    const coords = activeAnchor.getBoundingClientRect();
    const directions = {
      height: coords.height,
      width: coords.width,
      top: coords.top,
      left: coords.left,
    }
    if(entry.isIntersecting){
      bubble.style.setProperty('left', `${directions.left}px`);
      bubble.style.setProperty('top', `${directions.top}px`);
      bubble.style.setProperty('width', `${directions.width}px`);
      bubble.style.setProperty('height', `${directions.height}px`);
    }
});
};

sections.forEach(section => {
  observer.observe(section);
});
