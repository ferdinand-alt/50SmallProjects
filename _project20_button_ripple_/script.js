const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        // waar wordt er geklikt op de button ten opichte van de viewpoort?
        const x = e.clientX
        const y = e.clientY
        console.log(x, y);
        
        // je wilt weten waar de button zich begeeft in het document
        const buttonLeft = e.target.offsetLeft;
        const buttonTop = e.target.offsetTop
        console.log(buttonTop, buttonLeft);
        
        // je rekent nu uit hoveel x en y er in de button wordt geklikt
        const xInside = x - buttonLeft
        const yInside = y - buttonTop
        console.log(xInside, yInside);
        
        // als je klikt, maak een button
        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.left = xInside + "px";
        circle.style.top = yInside + 'px'
        // this. werkt niet met een arrow functie
        this.appendChild(circle)

        // Remove from the DOM
        setTimeout(() => circle.remove(), 500)
        
    })
})