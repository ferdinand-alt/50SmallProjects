const jokeElement = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

// jokeBtn.addEventListener('click', () => {
// const config = {
//       headers: {
//         Accept: "application/json",
//       },
//     };
//     fetch('https://icanhazdadjoke.com', config).then(res => res.json()).then(data => {
//         jokeElement.innerHTML = data.joke
//     })
// })

// ASYNC

jokeBtn.addEventListener('click', generateJoke)

async function generateJoke() {
    const config = {
      headers: {
        Accept: "application/json",
      },
    }

    const res = await fetch('https://icanhazdadjoke.com', config)
    const data = await res.json()

    jokeElement.innerHTML = data.joke
}

