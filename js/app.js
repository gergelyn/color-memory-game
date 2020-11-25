//  Global Variables
let colorNum = 4;
let level = 1;
let pickedColorsByApp = [];
let pickedColorsByUser = [];
let color;


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
    console.log(boxes[i].id, typeof boxes[i].id);
}

function boxClick() {
    color = this.id;
    console.log(color + " has clicked");
    pickedColorsByUser.push(color);
    console.log("Picked colors by user: " + pickedColorsByUser);
    console.log("Picked colors by app: " + pickedColorsByApp);
    setAnimation(color);
    checkPicks();
}

//  Functions

let getRandomInteger = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
};

let setAnimation = (color) => {
    // console.log("Before add: " + document.querySelector("#"+color).outerHTML);  //  Just for testing
    document.querySelector("#"+color).classList.add("flash");
    // console.log("After add: " + document.querySelector("#"+color).outerHTML);   //  Just for testing
    setTimeout(() => {
        // console.log("Before remove: " + document.querySelector("#"+color).outerHTML);
        document.querySelector("#"+color).classList.remove("flash");
        // console.log("After remove: " + document.querySelector("#"+color).outerHTML);
    }, 650);    
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
    console.log("Level reseted: " + level);
};

let resetPickedColorsByUser = () => {
    pickedColorsByUser.length = 0;
    console.log("pickedColorsByUser reseted: " + pickedColorsByUser);
};

let resetPickedColorsByApp = () => {
    pickedColorsByApp.length = 0;
    console.log("pickedColorsByApp reseted: " + pickedColorsByApp);
};

let gameLost = () => {
    gameMessage.classList.add(".fade-in");
    gameMessage.style.display = "flex";
    resetPickedColorsByApp();
    resetPickedColorsByUser();
    resetLevel();
};

let checkArrays = (a, b) => {
    return Array.isArray(a) && Array.isArray(b) && a.length === b.length && a.every((val, index) => val === b[index]);
};


let checkPicks = () => {
    console.log("Checking Picks");
    for(let i = 0; i < pickedColorsByUser.length; i++) {
        console.log("For loop");
        console.log(pickedColorsByApp[i] + i);
        console.log(pickedColorsByUser[i] + i);
        // if(pickedColorsByUser[i] !== pickedColorsByApp[i]) {
        //     console.log("if(pickedColorsByUser[i] !== pickedColorsByApp[i])");
        //     gameLost();
        // } else {
        //     if(pickedColorsByApp.length === pickedColorsByUser.length) {
        //         console.log("if(pickedColorsByApp.length == pickedColorsByUser.length)");
        //         console.log("Go to repeatAndPick");
        //         // resetPickedColorsByUser();
        //         repeatAndPick();
        //     } else {
        //         console.log("You got this!");
        //     }
        // }

        if(pickedColorsByUser.length !== pickedColorsByApp.length) {
            if(pickedColorsByUser[i] !== pickedColorsByApp[i]) {
                gameLost();
            } else if(pickedColorsByUser[i] === pickedColorsByApp[i]) {
                console.log("You got this!");
            } else {
                console.log("Not equal lengths, else");
            }
        } else if(pickedColorsByUser.length === pickedColorsByApp.length) {
            if(!checkArrays(pickedColorsByUser, pickedColorsByApp)) {
                gameLost();
            } else if(checkArrays(pickedColorsByUser, pickedColorsByApp)) {
                console.log("Go to repeatAndPick");
                repeatAndPick();
            } else {
                console.log("Equal lengths, else");
            }
        }
    }
};

let pickColorByApp = () => {
    console.log("Picking color by app");
    let pickedRandomInteger = getRandomInteger(colorNum);
    switch(pickedRandomInteger) {
        case 0:
            pickedColorsByApp.push("green");
            console.log("Picked colors by app: " + pickedColorsByApp);
            // setAnimation(greenBox);
            break;
        case 1:
            pickedColorsByApp.push("red");
            console.log("Picked colors by app: " + pickedColorsByApp);
            // setAnimation(redBox);
            break;
        case 2:
            pickedColorsByApp.push("yellow");
            console.log("Picked colors by app: " + pickedColorsByApp);
            // setAnimation(yellowBox);
            break;
        case 3:
            pickedColorsByApp.push("blue");
            console.log("Picked colors by app: " + pickedColorsByApp);
            // setAnimation(blueBox);
            break;
    }
};

let repeatAndPick = () => {
    resetPickedColorsByUser();
    console.log("Repeating and picking");
    increaseLevel();
    pickColorByApp();
    setTimeout(() => {
        for(let i = 0; i < pickedColorsByApp.length; i++) {
            setTimeout(() => {
                setAnimation(pickedColorsByApp[i]);
            }, i * 1300);
            console.log(pickedColorsByApp);
        }
    }, 1300);
    
    // setAnimation(pickedColorsByApp[pickedColorsByApp.length-1]);   // Get the last item of the array
};

let start = () => {
    resetLevel();
    resetPickedColorsByApp();
    startBtn.innerHTML = "RESTART";
    setTimeout(() => {
        pickColorByApp();
        setAnimation(pickedColorsByApp[0]);
        console.log(pickedColorsByApp);
    }, 650);
    
};

// start();

//  - [x] The problem is that if I click, there are no reseting on the pickedColorsByUser array, so the 2 arrays have the same length all the time
//  - [x] The above problem has to be double checked
//  - [x] Another problem is that in the checkPicks, to lose the game
//  - [x] Last color doesn't flash (problem in repeatAndPick)
//  - [x] Make work the timing for flashing
//  - [] Maybe the checkPick can be enough with checking the 2 arrays with checkArrays(pickedColorsByUser, pickedColorsByApp)

// for(let i = 0; i < level; i++) {
//     setTimeout(() => {
//         setAnimation(pickedColorsByApp[i]);
//     }, i * 1300);
//     console.log(pickedColorsByApp);
// }


//  If I add the flash animation, I can't remove it in the moment, so I have to check if the given element has it, and if has, remove it
//  The solution is the Element.classList.toggle();
