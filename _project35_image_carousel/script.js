// img container
const imgs = document.getElementById('imgs')
const img = document.querySelectorAll("#imgs img");
// buttons
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')


let index = 0

let interval = setInterval(run, 10000)

function run() {
    index++

    changeImage()
}

function changeImage() {
    if (index > img.length - 1) {
        index = 0
    } else if (index < 0) {
        index = img.length - 1;
    }

    imgs.style.transform = `translate(${-index * 500}px)`
}


function resetInterval() {
    clearInterval(interval)
    interval = setInterval(run, 2000)
}


rightBtn.addEventListener('click', () => {
    index++
    changeImage()
    resetInterval()
})


leftBtn.addEventListener("click", () => {
  index--;
  changeImage();
  resetInterval();
});