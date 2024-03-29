const button = document.getElementById('button')
const toasts = document.getElementById('toasts')

const messages = [
    'Message one',
    'Message two',
    'Message three',
    'Message four',
    'Message five',
]

button.addEventListener('click', () => createNotification())

function createNotification() {
    const notif = document.createElement('div')
    notif.classList.add('toast')
    notif.innerText = textRandom()
    toasts.appendChild(notif)

    setTimeout(() => {
        notif.remove()
    }, 3000)
}

function textRandom() {
    return messages[Math.floor(Math.random() * messages.length)]
}