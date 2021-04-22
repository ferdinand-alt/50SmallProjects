const nav = document.querySelector('nav')
window.addEventListener('scroll', fixNav)

function fixNav() {
    // geeft je een value van de scrol
    console.log(window.scrollY, nav.offsetHeight);
    if(scrollY > nav.offsetHeight){
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}