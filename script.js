let xp = 0;
let health = 100;
let credits = 50;
let inventory = ["hyperdrive"]

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector('.text');
const healthText = document.querySelector('#healthText');
const xpText = document.querySelector('#xpText');
const creditsText = document.querySelector('#creditsText');

const alienStats = document.querySelector('.alienStats');
const alienNameText = document.querySelector('#alienNameText');
const alienHealthText = document.querySelector('#alienHealthText');





const locations = [
    {
        name: "deep-space",
        "button-text": ["Space Station", "Planetary Exploration", "Close the Black Hole"],
        "button-functions": [spaceStation, planetExplore, closeBlackHole],
        text: "You are in deep space."
    },
    {
        name: "space-station",
        "button-text": ["Buy phaser (50 credits)", "Buy rockets (150 credits)", "Deep Space"],
        "button-functions": [spaceStation, planetExplore, closeBlackHole],
        text: "You have arrived at the space station! Here, you can purchase better equipment to survive planetary exploration. What will you buy?"
    },
    {
        name: "planet-explore",
        "button-text": ["Buy phaser (50 credits)", "Buy rockets (150 credits)", "Deep Space"],
        "button-functions": [spaceStation, planetExplore, closeBlackHole],
        text: "You have arrived at the space station! Here, you can purchase better equipment to survive planetary exploration. What will you buy?"
    },
    {
        name: "close-black-hole",
        "button-text": ["Buy phaser (50 credits)", "Buy rockets (150 credits)", "Deep Space"],
        "button-functions": [spaceStation, planetExplore, closeBlackHole],
        text: "You have arrived at the space station! Here, you can purchase better equipment to survive planetary exploration. What will you buy?"
    }

];

//buttons activation
button1.onclick = spaceStation;
button2.onclick = planetExplore;
button3.onclick = closeBlackHole;


function update(location) {
    alienStats.style.display = "none";
    button1.onclick = location["button-function"][0];
    button2.onclick = location["button-function"][1];
    button3.onclick = location["button-function"][2];
    button1.innerText = location["button-text"][0];
    button2.innerText = location["button-text"][1];
    button3.innerText = location["button-text"][2];
    text.innerHTML = location.text;
}

function deepSpace() {
    update(locations[0]);
}
function spaceStation() {
    update(locations[1]);
}
function planetExplore() {
    update(locations[2]);
}
function closeBlackHole() {
    update(locations[3]);
}







