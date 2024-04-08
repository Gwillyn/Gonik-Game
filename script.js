
// These variables encompass the input where you put your name to begin the game.
const submit = document.querySelector('#nameTagSubmit');
submit.addEventListener('click', nameChange);
let player = document.querySelector('#player');
const nameText = document.querySelector('#nameTagText');
const game = document.querySelector('.game'); //This is the whole game window
const nameInput = document.querySelector('.nameTagBlock');
const header = document.querySelector('#header');



// This hides the name input and shows the game input when filled sufficiently. Also, uses the name to refer to the player for the rest of the game.

function nameChange() {
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
const button4 = document.querySelector('#button4');
const button5 = document.querySelector('#button5');
const button6 = document.querySelector('#button6');
const text = document.querySelector('#text');
const alienNameText = document.querySelector('#alienNameText');
const alienHealthText = document.querySelector('#alienHealthText');
const imageDesc = document.querySelector('.imageDesc');
const alienStats = document.querySelector('.alienStats');



// These are the places (locations) that will occur throughout the game
let places = [
    {
        name: "cockpit",
        "b-text": ["Deep Space", "Deep Space", "Deep Space"],
        "b-function": [deepSpace, deepSpace, deepSpace],
        text: `You are in the cockpit.`
    },
    //deep space area
    {
        name: "deep space",
        "b-text": ["Cockpit", "Space Station", "Light Travel"],
        "b-function": [cockpit, spaceStation, lightTravel],
        text: `You are in deep space. <br><br>You look at the galaxy map. <br><br> <u>What do you want to do?<u>`
    },
    //Space station places 
    {
        name: "space station",
        "b-text": ["Weapon Store", "Mechanic", "Deep Space"],
        "b-function": [weaponStore, mechanic, deepSpace],
        text: `You arrive at the space station. <br><br>Many stores are open, but you are only interested in munitions and ship repairs. <br><br><u>What will you buy?</u>`
    },
    {
        name: "weapon store",
        "b-text": ["Phaser (50 credits)", "Rockets (150 credits)", "Space Station"],
        "b-function": [buyPhaser, buyRockets, spaceStation],
        text: `You arrive at the Weapon Store. <br><br>The clerk is quiet, but seems to know what he's doing. <br><br><u>What will you buy?</u>`
    },
    {
        name: "Mechanic",
        "b-text": ["Repair Ship (100 credits)", "", "Space Station"],
        "b-function": [buyHealth, buyHealth, spaceStation],
        text: `You arrive at the Weapon Store. <br><br>A loud, dirty guy greets you<br>with a yell <br><br><u>"You want some repairs?"</u>`
    },
    //Light travel places
    {
        name: "light travel",
        "b-text": ["Xathor", "Gokr Prime", "Jenki X"],
        "b-function": [xathor, gokr, jenki],
        text: `There are so many planets to go to, but you're looking for a challenge. <br><br><u>Where will you go?</u>`
    }
];
//button start
button1.onclick = deepSpace;
button2.onclick = deepSpace;
button3.onclick = deepSpace;

//Made this function to simplify the code. Too much writing of each individual place as individual functions so I made this.
function update(place) {
    alienStats.style.display = "none";
    button1.innerText = place["b-text"][0];
    button2.innerText = place["b-text"][1];
    button3.innerText = place["b-text"][2];
    button1.onclick = place["b-function"][0];
    button2.onclick = place["b-function"][1];
    button3.onclick = place["b-function"][2];
    text.innerHTML = place.text;
    button4.classList.add('hide');
    button5.classList.add('hide');
    button6.classList.add('hide');
    button2.classList.remove('hide')
}

//Cockpit
function cockpit() {
    update(places[0]);
    imageDesc.style.backgroundImage = "url(https://i.pinimg.com/originals/bc/b4/3f/bcb43f3268d5c86d07234f320ad3fdd4.jpg)"
}

//Deep Space
function deepSpace() {
    update(places[1]);
    button4.classList.remove('hide');
    button4.innerText = "Close Black Hole";
    button4.onclick = blackHole;
    imageDesc.style.backgroundImage = "url(https://wallpaperaccess.com/full/634686.jpg)";
    imageDesc.style.backgroundPositionY = "-40px";
}

//Space Station
function spaceStation() {
    update(places[2]);
    imageDesc.style.backgroundImage = "url(https://i.pinimg.com/originals/11/e9/6e/11e96e0d427b6eb2304c2753f85744ca.jpg)";
}
function weaponStore() {
    update(places[3]);
}
function buyRockets() { }
function buyPhaser() {
    alert()
}
function mechanic() {
    update(places[4]);
    button2.classList.add('hide');
 }
 function buyHealth() { }

//Planetary Exploration
function lightTravel() {
    update(places[5]);
    button4.classList.remove('hide');
    button4.innerText = "Deep Space"
    button4.onclick = deepSpace;
    imageDesc.style.backgroundImage = "url(https://th.bing.com/th/id/OIP.Fv3z5jsHU6GghlKc5nSHiwHaEo?rs=1&pid=ImgDetMain)";
    imageDesc.style.backgroundPositionY = "-30px";
}
function gokr() { }
function xathor() { }
function jenki() { }

//Close the Black Hole
function blackHole() {}


//working on these









