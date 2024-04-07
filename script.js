// These variables encompass the input where you put your name to begin the game.
const submit = document.querySelector('#nameTagSubmit');
submit.addEventListener('click', nameChange);
const player = document.querySelector('.player');
const nameText = document.querySelector('#nameTagText');
const game = document.querySelector('.game'); //This is the whole game window
const nameInput = document.querySelector('.nameDiv');

// This hides the name input and shows the game input when filled sufficiently. Also, uses the name to refer to the player for the rest of teh game.

function nameChange() {
    if (nameText.value <=1) {
        alert("Help");
    } else {
    player.innerText = `${nameText.value}`;
    game.classList.remove('hide');
    nameInput.classList.add('hide');
    }
    
}
