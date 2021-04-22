const loveMe = document.querySelector('.loveMe')
const times = document.querySelector('#times')
// dit element wordt ingevoegd in de Html, check de createHeart functie
const heart = document.createElement("i");
heart.classList.add("fas");
heart.classList.add("fa-heart");

let clickTime = 0
let timesClicked = 0

// zorgt ervoor dat je binnen een bepaalde tijd klikt
loveMe.addEventListener('click', (e) => {
    if (clickTime === 0) {
        clickTime = new Date().getTime()
        console.log(clickTime);
    } else {
        if ((new Date().getTime() - clickTime < 800)) {
            createHeart(e)
            clickTime = 0
        } else {
            clickTime = new Date().getTime()
        }
    }
})

const createHeart = (e) => {
    console.log(e);
    

    // waar klik je in de viewport
    const x = e.clientX
    const y = e.clientY
    console.log(x, y);
    
    // offset is waar het element zich begeeft
    const leftOffset = e.target.offsetLeft
    const topOffset = e.target.offsetTop
    console.log(leftOffset, topOffset);
    
    const xInside = x - leftOffset
    const yInside = y - topOffset
    console.log(xInside, yInside);

    heart.style.left = `${xInside}px`
    heart.style.top = `${yInside}px`;

    loveMe.appendChild(heart)

    times.innerHTML = ++timesClicked

    // haal de harten uit de DOM
    setTimeout(() => {
        heart.remove()
    }, 2000)
}