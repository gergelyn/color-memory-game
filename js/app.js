//  Global Variables
let colorNum = 4;
let colors = ["green", "red", "yellow", "blue"];
let level = 1;
let pickedColorsByApp = [];
let pickedColorsByUser = [];
let color;

console.log(typeof window.localStorage);

//  Elements
let boxes = document.getElementsByClassName("box");
let levelEl = document.querySelector(".level");
let startBtn = document.querySelector(".start");
let tryAgainBtn = document.querySelector(".try-again");
let gameMessage = document.querySelector(".game-over");
levelEl.innerHTML = level;

startBtn.addEventListener('click', event => {
    start();
});

tryAgainBtn.addEventListener('click', event => {
    gameMessage.style.display = "none";
    start();
});

for(let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", boxClick);
    console.log(boxes[i].id, typeof boxes[i].id);  // Test line
}

//  Functions

function boxClick() {
    color = this.id;
    console.log(color + " has clicked");  // Test line
    pickedColorsByUser.push(color);
    console.log("Picked colors by user: " + pickedColorsByUser);  // Test line
    console.log("Picked colors by app: " + pickedColorsByApp);  // Test line
    setAnimation(color);
    checkPicks();
}

let getRandomInteger = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
};

let setAnimation = (color) => {
    document.querySelector("#"+color).classList.add("flash");
    setTimeout(() => {
        document.querySelector("#"+color).classList.remove("flash");
    }, 700);    // 650    
};

let refreshLevel = () => {
    levelEl.innerHTML = level;
};

let increaseLevel = () => {
    level++;
    refreshLevel();
};

//  Reset Functions

let resetLevel = () => {
    level = 1;
    refreshLevel();
    console.log("Level reseted: " + level);  // Test line
};

let resetPickedColorsByUser = () => {
    pickedColorsByUser.length = 0;
    console.log("pickedColorsByUser reseted: " + pickedColorsByUser);  // Test line
};

let resetPickedColorsByApp = () => {
    pickedColorsByApp.length = 0;
    console.log("pickedColorsByApp reseted: " + pickedColorsByApp);  // Test line
};

let gameLost = () => {
    gameMessage.classList.add(".fade-in");
    gameMessage.style.display = "flex";
    resetPickedColorsByApp();
    resetPickedColorsByUser();
    resetLevel();
};

let checkArrays = (a, b) => {
    return Array.isArray(a) && Array.isArray(b) && a.every((val, index) => val === b[index]);
};

let checkPicks = () => {
    console.log("Checking Picks");  // Test line
    if(pickedColorsByUser.length !== pickedColorsByApp.length) {
        if(!checkArrays(pickedColorsByUser, pickedColorsByApp)) {
            gameLost();
        } else {    // This else is just for testing
            console.log("You got this!");
        }
    } else {
        if(!checkArrays(pickedColorsByUser, pickedColorsByApp)) {
            gameLost();
        } else {
            repeatAndPick();
        }
    }
};

let pickColorByApp = () => {
    console.log("Picking color by app");  // Test line
    let pickedRandomInteger = getRandomInteger(colorNum);
    pickedColorsByApp.push(colors[pickedRandomInteger]);
    console.log("Picked colors by app: " + pickedColorsByApp);  // Test line
};

let repeatAndPick = () => {
    resetPickedColorsByUser();
    console.log("Repeating and picking");  // Test line
    increaseLevel();
    pickColorByApp();
    setTimeout(() => {
        for(let i = 0; i < pickedColorsByApp.length; i++) {
            setTimeout(() => {
                setAnimation(pickedColorsByApp[i]);
            }, i * 750);   // 1300
            console.log(pickedColorsByApp);  // Test line
        }
    }, 1400);   // 1300
};

let start = () => {
    resetLevel();
    resetPickedColorsByApp();
    startBtn.innerHTML = "RESTART";
    setTimeout(() => {
        pickColorByApp();
        setAnimation(pickedColorsByApp[0]);
        console.log(pickedColorsByApp);  // Test line
    }, 700);    // 650
};