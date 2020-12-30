/* Global Variables to select the grid container and the clear button */
const container = document.querySelector('.grid');
const resetButton = document.querySelector('#reset-button');

/* add event listener to the button to excute clear function when the button clicked */
resetButton.addEventListener('click', clear);

/* add event listener to the window to excute generateGrid function when the page load */
window.addEventListener('load', generateGrid());

/* takes input from user to change the grid */
function clear() {
    let userChoice = prompt('Enter Number between 1 and 64');
    if (userChoice !== null) {
        userChoice = parseInt(userChoice);
        if (userChoice > 1 && userChoice <= 64) {
            const gridItems = document.querySelectorAll('.grid-item');
            Array.from(gridItems);
            gridItems.forEach((item) => {
                container.removeChild(item);
                });
            generateGrid(userChoice);
        } else{
            clear();
        }
    }
}

/* generate one square */
function generateItem() {
    const item = document.createElement('div');
    item.classList.add('grid-item');
    container.appendChild(item);
    item.addEventListener('mouseover',function(){
        item.style.backgroundColor = 'black';
    });
}

function generateGrid(size = 25) {
    container.setAttribute('style' ,`grid-template-columns: repeat(${size},1fr);`)
    for (let i = 0; i < size * size; i++) {
        generateItem();
        
    }
}
