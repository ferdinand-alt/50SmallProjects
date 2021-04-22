const tagsEl = document.getElementById('tags')
const textArea = document.getElementById('textarea')

// focus zet autotisch de curos in het gebied
textArea.focus()


//  keyUp is wanneer je de toest loslaat
textArea.addEventListener('keyup', (e) => {
    createTags(e.target.value)

    if (e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = ''
        }, 10);
        randomSelect()
    }
})


// de input is de e.target.value
// als een , er is dan 

function createTags(input) {
    console.log(input);
    //  je split nu met een comma en creert een Array, van een string naar een Array
    // de filter haalt de space eruit
    const tags = input.split(',').filter(tag => tag.trim()!== '').map(tag => tag.trim())
    console.log(tags);

    // clear de input
    tagsEl.innerHTML = ''



    // create Tags
    tags.forEach(tag => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerText = tag
        // je maakt het vast aan de div.tag
        tagsEl.appendChild(tagEl)
    })
}


function randomSelect() {
    const times = 30;
    const interval = setInterval(() => {
        const randomTag = pickRandomTag()

        highlightTag(randomTag)

        setTimeout(() => {
            unhighlightTag(randomTag)
        }, 100)
    }, 100)

    // uitzetten van de random
    setTimeout(() => {
        clearInterval(interval)
        setTimeout(() => {
            const randomTag = pickRandomTag()
            highlightTag(randomTag)
        }, 100)
    }, times * 100)
}

// Random tag
function pickRandomTag() {
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}


// class toevoegen
function highlightTag(tag) {
    tag.classList.add('highlight')
}

function unhighlightTag(tag) {
  tag.classList.remove("highlight")
}