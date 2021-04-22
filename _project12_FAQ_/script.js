const btn = document.querySelectorAll(".faq-toggle");

btn.forEach((button) => {
    button.addEventListener('click', () => {
    //  nieuw stuk
    button.parentNode.classList.toggle('active')
    })
})



