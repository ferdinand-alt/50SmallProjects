const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');


// links
left.addEventListener('mouseenter', () =>
    // toggle werkt niet want je moet mouseleave hebben
    container.classList.add('hover-left'))

left.addEventListener("mouseleave", () => container.classList.remove("hover-left"));


// rechts precies het zelfde als links


right.addEventListener("mouseenter", () =>
  // toggle werkt niet want je moet mouseleave hebben
  container.classList.add("hover-right")
);

right.addEventListener("mouseleave", () =>
  container.classList.remove("hover-right")
);


// belangirjk om een transitie aan te bregen

