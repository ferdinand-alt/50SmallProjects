// Selectors
const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')

fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)


for (const empty of empties) {
    empty.addEventListener('dragover', dragOver)
    empty.addEventListener('dragenter', dragEnter)
    empty.addEventListener('dragleave', dragLeave)
    empty.addEventListener('drop', dragDrop)
}

//  DRAG FUNCTIONS

// als je begint met klikken
function dragStart() {
    console.log('Start');
    this.className += ' hold'
    setTimeout(() => this.className = "invisible");
}


// als je de klik los laat
function dragEnd() { 
    console.log('End');
    this.className = ' fill'
}

// als je over iets heen gaat dan vuurt de Listener
function dragOver(e) { 
    e.preventDefault();
console.log('Over');
}

function dragEnter(e) {
    e.preventDefault()
    this.className += ' hovered'
    console.log('Enter');
}

function dragLeave() {
    console.log('Leave')
    this.className = 'empty'
}

function dragDrop() {
    console.log('Drop');
    this.className = 'empty'
    this.append(fill)
}