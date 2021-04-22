const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innerText = '0'

    const updateCounter = () => {
        const targel = counter.getAttribute("data-target");
        // console.log(typeof targel, targel);
        
        const target = +counter.getAttribute('data-target')
        const c = +counter.innerText
        // console.log(typeof target, target);
        // console.log(c);
        

        const increment = target / 200

        if (c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateCounter, 1);
            
        } else {
            counter.innerText = target
        }
        console.log("hello"); 
    }
     
// dit update constant
    updateCounter()
})