
// These variables encompass the input where you put your name to begin the game.
const submit = document.querySelector('#nameTagSubmit');
submit.addEventListener('click', nameChange);
const player = document.querySelector('#player');
const nameText = document.querySelector('#nameTagText');
const game = document.querySelector('.game'); //This is the whole game window
const nameInput = document.querySelector('.nameTagBlock');
const header = document.querySelector('#header');


// This hides the name input and shows the game input when filled sufficiently. Also, uses the name to refer to the player for the rest of the game.

function nameChange(epic) {
    if (nameText.value <= 1) {
        nameText.placeholder = "You Need a Name";
    }
    else {
        player.innerHTML = `${nameText.value}`;
        game.classList.remove('hide');
        nameInput.classList.add('hide');
        imageDesc.classList.remove('hide');
        header.classList.add('hide');
    }

}

function clickPress(event) {
    if (event.key == "Enter") { nameChange() }
}

let xp = 0;
let health = 0;
let credits = 0;
const xpText = document.querySelector('#xpText');
const healthText = document.querySelector('#healthText');
const creditsText = document.querySelector('#creditsText');
const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');
const text = document.querySelector('#text');
const alienNameText = document.querySelector('#alienNameText');
const alienHealthText = document.querySelector('#alienHealthText');
const imageDesc = document.querySelector('.imageDesc');


// These are the places (locations) that will occur throughout the game
let places = [
    {
        name: "deep space",
        "b-text": ["Space Station", "Planetary Exploration", "Close the Black Hole"],
        "b-function": [spaceStation, planetExplore, blackHole],
        text: `You are in deep space.`
    },
    {
        name: "space station",
        "b-text": ["Phaser (50 credits)", "Rockets (150 credits)", "Deep Space"],
        "b-function": [buyPhaser, buyRockets, deepSpace],
        text: `You arrive at the space station. <br><br>Many stores are open, but you are only interested in munitions. <br><br><u>What will you buy?</u>`
    }
];
//button start
button1.onclick = deepSpace;
button1.onclick = deepSpace;
button1.onclick = deepSpace;

//Made this function to simplify the code. Too much writing of each individual place as individual functions so I made this.
function update(place) {
    button1.innerText = place["b-text"][0];
    button2.innerText = place["b-text"][1];
    button3.innerText = place["b-text"][2];
    button1.onclick = place["b-function"][0];
    button2.onclick = place["b-function"][1];
    button3.onclick = place["b-function"][2];
    text.innerHTML = place.text;
}

//Deep Space
function deepSpace() {
    update(places[0]);
    imageDesc.style.backgroundImage = "url(https://wallpaperaccess.com/full/634686.jpg)";
    imageDesc.style.backgroundPositionY = "-50px";
}
//Space Station
function spaceStation() {
    update(places[1]);
    imageDesc.style.backgroundImage = "url(https://i.pinimg.com/originals/11/e9/6e/11e96e0d427b6eb2304c2753f85744ca.jpg)";
}
//Planetary Exploration
function planetExplore() {
    update(places[1]);
}
//Close the Black Hole
function blackHole() {
    update(places[1]);
}
//working on these
function buyPhaser() { }
function buyRockets() { }

