
// These variables encompass the input where you put your name to begin the game.
const submit = document.querySelector('#nameTagSubmit');
submit.addEventListener('click', nameChange);
let player = document.querySelector('#player');
let nameText = document.querySelector('#nameTagText');
const game = document.querySelector('.gameFlex'); //This is the whole game window
const nameInput = document.querySelector('.nameTagBlock');
const header = document.querySelector('.header');




// This hides the name input and shows the game input when filled sufficiently. Also, uses the name to refer to the player for the rest of the game. This needs to be completely reworked, it's too messy and doesn't save the value of what the user inputted. 


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

let power = 100;
let health = 100;
let credits = 500;
let currentWeapon = 0;
let fighter;
const powerText = document.querySelector('#powerText');
const healthText = document.querySelector('#healthText');
const creditsText = document.querySelector('#creditsText');
const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');
const button4 = document.querySelector('#button4');
const button5 = document.querySelector('#button5');
const button6 = document.querySelector('#button6');
const button7 = document.querySelector('#button7');
const text = document.querySelector('#text');
const alienNameText = document.querySelector('#alienNameText');
const alienHealthText = document.querySelector('#alienHealthText');
let alienHealth = 0;
let alienPower = 0;
const imageDesc = document.querySelector('.imageDesc');
const alienStats = document.querySelector('.alienStats');
const phasersImage = document.querySelector('#phasersImage')
const rocketsImage = document.querySelector('#rocketsImage')

const phasersWeapon = { name: "phasers", power: 50 }
const rocketsWeapon = { name: "rockets", power: 150 }

const aliens = [
    {
        name: "Ice Slug",
        power: 15,
        health: 200,
        text: `A very cold looking Slug approaches`,
        attackText: `You hit that Slug where it hurts!`
        
    },
    {
        name: "Snow Man",
        power: 40,
        health: 500,
        text: `A snow man?`,
        attackText: `Kicked that snow guy in the jingle-bells!`
        
    },
    {
        name: "Gross Grub",
        power: 7,
        health: 500,
        text: `This grub thing is making you sick. <br>You have to kill it.`,
        attackText: `That's gross!`
    },
    {
        name: "Lizard",
        power: 70,
        health: 200,
        text: `Woah, a person-sized lizard! <br>Why does it look so familiar?`,
        attackText: `Mark Zuckerberg?!`
    },
    {
        name: "Sand Beetle",
        power: 64,
        health: 500,
        text: `A large beetle emerges out of the sand.`,
        attackText: `It's just a bug!`
    },
    {
        name: "Giant Worm",
        power: 100,
        health: 1000,
        text: `A giant sand worm approaches after feeling your vibrations! <br><br><br><br><br> Dune much?`,
        attackText: `You hit it! <br>But did you really hurt it?`
    }
    
]
// These are the places (locations) that will occur throughout the game
// It may seem like using a single array for every location is harder than splitting the up into more concise arrays, but I did not think there would be as many places as there ended up being, and didn't want to change it.
const places = [
    {//0
        name: "cockpit",
        "b-text": ["Deep Space", "Deep Space", "Deep Space"],
        "b-function": [deepSpace, deepSpace, deepSpace],
        text: `You are in the cockpit.`
    },
    //deep space area
    {//1
        name: "deep space",
        "b-text": ["Cockpit", "Space Station", "Light Travel"],
        "b-function": [cockpit, spaceStation, lightTravel],
        text: `You are in deep space. <br><br>You look at the galaxy map. <br><br> <u>What do you want to do?<u>`
    },
    //Space station places 
    {//2
        name: "space station",
        "b-text": ["Weapon Store", "Mechanic", "Deep Space"],
        "b-function": [weaponStore, mechanic, deepSpace],
        text: `You arrive at the space station. <br><br>Many stores are open, but you are only interested in munitions and ship repairs. <br><br><u>What will you buy?</u>`
    },
    {//3
        name: "weapon store",
        "b-text": ["Phaser (50 credits)", "Rockets (150 credits)", "Space Station"],
        "b-function": [buyPhaser, buyRockets, spaceStation],
        text: `You arrive at the Weapon Store. <br><br>The clerk is quiet, but seems to know what he's doing. <br><br><u>What will you buy?</u>`
    },
    {//4
        name: "Mechanic",
        "b-text": ["Minor Fixes", "Large Repairs", "Space Station"],
        "b-function": [buyHealth, buyHealth2, spaceStation],
        text: `You arrive at the Weapon Store. <br><br><span id="borderText">Minor fixes are 50 credits</span><br><br><span id="borderText">Large repairs are 100 credits</span><br><br>A large man greets you at the door.<br>With a yell, he asks <br><br><u>"You want some repairs?"</u>`
    },
    //Light travel places

    {//5
        name: "light travel",
        "b-text": ["Xathor", "Gokr Prime", "Jenki X"],
        "b-function": [xathor, gokr, jenki],
        text: `There are so many planets to go to, but only these present the challenge you're looking for. <br><br><u>Where will you go?</u>`
    },
    {//6
        name: "xathor",
        "b-text": ["Fight Ice Grub", "Fight Snowman", "Back to Planets"],
        "b-function": [fightIceGrub, fightSnowman, lightTravel],
        text: "<span id='title'>Xathor</span>: <br><br>Average Temperature: -90°C <br><br>Hostility Level: Harmful <br><br>Human Population: 0 <br><br>4,000,000 Casualties"
    },
    {//7
        name: "gokr prime",
        "b-text": ["Fight Gross Grub", "Fight Lizard", "Back to Planets"],
        "b-function": [fightGrossGrub, fightLizard, lightTravel],
        text: "<span id='title'>Gokr Prime</span>: <br><br>Average Temperature: 30°C <br><br>Hostility Level: Dangerous <br><br>Human Population: 4,000 <br><br>20,000,000 Casualties"
    },
    {//8
        name: "jenki X",
        "b-text": ["Fight Sand Beetles", "Fight Giant Worm", "Back to Planets"],
        "b-function": [fightSandBeetle, fightWorm, lightTravel],
        text: "<span id='title'>Jenki X</span>: <br><br>Average Temperature: 50°C <br><br>Hostility Level: Hostile <br><br>Human Population: 2,000 <br><br>110,000,000 Casualties"
    },
    {//9
        name: "fighting stage",
        "b-text": ["Attack", "Dodge", "Fly Away"],
        "b-function": [attack, dodge, lightTravel],
        text: "An alien looks at you."
    }

];

//button start
button1.onclick = deepSpace;
button2.onclick = deepSpace;
button3.onclick = deepSpace;

//Made this function to simplify the code. Too much writing of each individual place as individual functions so I made this.
function update(place) {
    nameChange()
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
    button7.classList.add('hide');
    button1.classList.remove('hide');
    button2.classList.remove('hide');
    button3.classList.remove('hide');
    imageDesc.style.backgroundPositionY = "0px";
    imageDesc.style.backgroundPositionX = "0px";
    imageDesc.style.backgroundSize = "cover";
    button7.innerText = "Learn More";

}

//Cockpit
function cockpit() {
    update(places[0]);
    imageDesc.style.backgroundImage = "url(https://lh3.googleusercontent.com/drive-viewer/AKGpihaJFe-lTD7fo0Db81_rD94b-mw4spZYRUHE4YcSooKBhn2fH8kk_K15XaU7dDaIys_xTMX2o1dzn8ocDsxRwHMtBYh0a3niig=s1600-rw-v1)"
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
    imageDesc.style.backgroundPositionY = "-40px";
}
//Space Station - Weapons Store
function weaponStore() {
    update(places[3]);
}
let rocketsBought = true;
function buyRockets() {
    if (rocketsBought === true) {
        if (credits < 150) {
            text.innerHTML = "You do not have enough credits, bud."
        } else {
            credits -= 150;
            creditsText.innerText = credits;
            power += rocketsWeapon.power;
            powerText.innerText = power;
            rocketsImage.classList.remove('hide');
        }
        rocketsBought = false;
    } else {
        text.innerText = "You already have Rockets!"
    }
}
let phasersBought = true;
function buyPhaser() {
    if (phasersBought === true) {
        if (credits < 50) {
            text.innerHTML = "You do not have enough credits, bud."
        } else {
            credits -= 50;
            creditsText.innerText = credits;
            power += phasersWeapon.power;
            powerText.innerText = power;
            phasersImage.classList.remove('hide');
        }
        phasersBought = false;
    } else {
        text.innerText = "You already have phasers!"
    }
}
//Space Station - Mechanic
function mechanic() {
    update(places[4]);
    imageDesc.style.backgroundImage = "url(https://lh3.googleusercontent.com/drive-viewer/AKGpihZAtbBP7c7DFBEBNV-B8BfM2S70NZAxZZ8KTeiRhqeHGHW8mQkBbF4ewSZvy3iibCtvMB-UCQlqhACntpTxwWIHjU7baAkaEjE=s1600-rw-v1)"
}
function buyHealth() { //Allows player to purchase health
    if (credits >= 10) {
        credits -= 10
        creditsText.innerHTML = credits
        health += 10
        healthText.innerHTML = health
    }
    else {
        text.innerHTML = `You do not have enough credits.`
    }
}
function buyHealth2() {
    if (credits >= 50) {
        credits -= 50
        creditsText.innerHTML = credits
        health += 50
        healthText.innerHTML = health
    }
    else {
        text.innerHTML = `You do not have enough credits.`
    }
}

//Planetary Exploration - travel screen
function lightTravel() {
    update(places[5]);
    button4.classList.remove('hide');
    button4.innerText = "Deep Space"
    button4.onclick = deepSpace;
    imageDesc.style.backgroundImage = "url(https://th.bing.com/th/id/R.9da839256ffa0bd5c614e351951f33aa?rik=d2YfhU6lazKVlA&pid=ImgRaw&r=0)";
    imageDesc.style.backgroundPositionY = "-10px";
}
//Planetary Exploration - Xathor
function xathor() {
    update(places[6]);
    imageDesc.style.backgroundImage = "url(https://orig00.deviantart.net/a87e/f/2015/353/7/c/ice_planet_by_opreadorin1-d9kmqfk.jpg)";
    imageDesc.style.backgroundSize = "contain";
    imageDesc.style.backgroundPositionY = "2%";
    imageDesc.style.backgroundPositionX = "50%";
    button7.classList.remove('hide');
    button7.onclick = learnXathor;
    function learnXathor() {
        text.innerHTML = `This is Xathor <br><br>This planet is a cold, desolate wasteland inhabited by ice creatures<br><br><u>Will you stay and fight?</u><br><br>`
        button7.onclick = xathor;
        button7.innerText = "Back"
    }
}
function fightIceGrub() {
    fighter = 0;
    fight();
}
function fightSnowman() {
    fighter = 1;
    fight();
}
//Planetary Exploration - Gokr 
function gokr() {
    update(places[7]);
    imageDesc.style.backgroundImage = "url(https://th.bing.com/th/id/OIP.IP-oATIhfW4hJsWFa0yaZQHaHX?rs=1&pid=ImgDetMain)";
    imageDesc.style.backgroundSize = "contain";
    imageDesc.style.backgroundPositionY = "1%";
    imageDesc.style.backgroundPositionX = "52%";
    button7.classList.remove('hide');
    button7.onclick = learnGokr;
    function learnGokr() {
        text.innerHTML = "This is Gokr Prime <br><br>This planet is a warm and humid jungle inhabited by giant creatures<br><br><u>Will you stay and fight?</u><br><br>"
        button7.onclick = gokr;
        button7.innerText = "Back"
    }
}
function fightGrossGrub() {
    fighter = 2;
    fight();
}
function fightLizard() {
    fighter = 3;
    fight();
}
//Planetary Exploration - Jenki
function jenki() {
    update(places[8]);
    imageDesc.style.backgroundImage = "url(https://p.turbosquid.com/ts-thumb/tc/UFs4EW/6yBX27SB/dune_e/jpg/1587122550/1920x1080/fit_q87/a6b6a0b3be0c436f0ad190e75eb73aed0028be91/dune_e.jpg)";
    imageDesc.style.backgroundSize = "contain";
    imageDesc.style.backgroundPositionY = "1%";
    imageDesc.style.backgroundPositionX = "50%";
    button7.classList.remove('hide');
    button7.onclick = learnJenki;
    function learnJenki() {
        text.innerHTML = "This is Jenki X <br><br>This planet is a hot and dry sand planet. Covered in dunes, inhabited by giant creatures<br><br><u>Will you stay and fight?</u><br><br>"
        button7.onclick = jenki;
        button7.innerText = "Back"
    }


}

function fightSandBeetle() {
    fighter = 4;
    fight();
}
function fightWorm() {
    fighter = 5;
    fight();
}

//Close the Black Hole
function blackHole() { }


//working on these

function fight() {
    update(places[9]);
    alienStats.style.display = "flex";
    alienNameText.innerText = aliens[fighter].name;
    alienHealthText.innerText = aliens[fighter].health;
    alienHealth = aliens[fighter].health;
    text.innerHTML = aliens[fighter].text;
}

function attack() {
    text.innerHTML = `${aliens[fighter].attackText} <br><br> You dealt __ damage`
}
function dodge() {}

