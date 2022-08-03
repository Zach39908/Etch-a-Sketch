// Etch-a-Sketch Javascript File
// started: 7/31/2022

const gridContainer = document.querySelector('.container');

function setDivs() {
    const gridDivs = document.querySelectorAll('.container > div');
    gridDivs.forEach(div => {
        let i = 0;
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = `rgb(${240 - 24 * i}, ${128 - 13 * i}, ${128 - 13 * i})`;
            i++;
        });
    });
}

function emptyGrid() {
    while(gridContainer.hasChildNodes())
        gridContainer.removeChild(gridContainer.firstChild);
}

function fillGrid(size) {
    for(let i = 0; i < size ** 2; i++)
        gridContainer.appendChild(document.createElement('div'));

    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
}

const resetButton = document.querySelector('.resetBtn');
resetButton.addEventListener('click', () => {
    let gridSize;

    while(true) {
        gridSize = prompt('Enter the Sketchbook Size', '16');
        
        if(isNaN(gridSize))
            alert('Invalid Input: Not a Number');
        else if(gridSize > 100 || gridSize < 0)
            alert('Invalid Input: Must be Within 0-100')
        else
            break;
    }

    emptyGrid();
    fillGrid(gridSize);
    setDivs();
});

fillGrid(16, 16);
setDivs();