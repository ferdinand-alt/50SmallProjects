const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')


// state
let currentActive = 1


next.addEventListener('click', () => {
    // increment
    currentActive++


    // state kan niet meer dan 4 zijn
    // je zorgt ervoor dat hij op 4 blijft hangen
    if (currentActive >= circles.length) {
        currentActive = circles.length
    }
    update()
})

prev.addEventListener("click", () => {
    // decrement
  currentActive--;

    
    // zorgen dat de sate niet minder dan 1 kan worden.
    // je zorgt ervoor dat hij op 1 blijft hangen
  if (currentActive <= 1) {
    currentActive = 1
  }
  update()
});


// update

function update() {
    circles.forEach((circle, index) => {
        if (index < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })
    const actives = document.querySelectorAll('.active')

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + `%`
    

    // disabled de buttons met een statement
    if (currentActive === 1) {
        prev.disabled = true
    } else if (currentActive === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}
