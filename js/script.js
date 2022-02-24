const cellElements = document.querySelectorAll('[data-cell]') 

let coffeeTurn = 

cellElements.forEach(cell => {
    cell.addEventListener('click', handleClick, {once: true})
    // for everytime we click on this cell
    // only do it once it is true that we clicked on the cell
    // should only happen once per cell to prevent an override
})

function handleClick(e) {
    // placeMark
    // check the winner
    // determine if this is a draw
    // allow players to switch turns



    console.log('clicked')
    // will print the number of times we clicked on a box
    // will not count 'click' if we reclick on the same box more than once
}