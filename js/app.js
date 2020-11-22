//  Global Variables
let colorNum = 4;
let level = 1;
let pickedColorsByApp = [];
let pickedColorsByUser = [];

//  Elements
let redBox = document.querySelector("#red");
let yellowBox = document.querySelector("#yellow");
let greenBox = document.querySelector("#green");
let blueBox = document.querySelector("#blue");

greenBox.addEventListener('click', event => {
    console.log('Green has clicked');
    pickedColorsByUser.push("green");
    console.log("Picked colors by user: " + pickedColorsByUser);
    console.log("Picked colors by app: " + pickedColorsByApp);
    setAnimation("green");
    checkPicks();
});

redBox.addEventListener('click', event => {
    console.log('Red has clicked');
    pickedColorsByUser.push("red");
    console.log("Picked colors by user: " + pickedColorsByUser);
    console.log("Picked colors by app: " + pickedColorsByApp);
    setAnimation("red");
    checkPicks();
});

yellowBox.addEventListener('click', event => {
    console.log('Yellow has clicked');
    pickedColorsByUser.push("yellow");
    console.log("Picked colors by user: " + pickedColorsByUser);
    console.log("Picked colors by app: " + pickedColorsByApp);
    setAnimation("yellow");
    checkPicks();
});

blueBox.addEventListener('click', event => {
    console.log('Blue has clicked');
    pickedColorsByUser.push("blue");
    console.log("Picked colors by user: " + pickedColorsByUser);
    console.log("Picked colors by app: " + pickedColorsByApp);
    setAnimation("blue");
    checkPicks();
});

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

let increaseLevel = () => {
    level++;
};

//  Reset Functions

let resetLevel = () => {
    level = 1;
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
    resetPickedColorsByApp();
    resetPickedColorsByUser();
    resetLevel();
};

let checkPicks = () => {
    console.log("Checking Picks");
    for(let i = 0; i < pickedColorsByUser.length; i++) {
        if(pickedColorsByApp[i] != pickedColorsByUser[i]) {
            gameLost();
        } else {
            if(pickedColorsByApp.length == pickedColorsByUser.length) {
                repeatAndPick();
            } else {
                console.log("You got this!");
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
    for(let i = 0; i < pickedColorsByApp.length; i++) {
        setTimeout(() => {
            setAnimation(pickedColorsByApp[i]);
        }, i * 1300);
        console.log(pickedColorsByApp);
    }
    pickColorByApp();
    setAnimation(pickedColorsByApp[pickedColorsByApp.length-1]);   // Get the last item of the array
};

if(level == 1) {
    pickColorByApp();
    setAnimation(pickedColorsByApp[0]);
    console.log(pickedColorsByApp);
}

//  - [] The problem is that if I click, there are no reseting on the pickedColorsByUser array, so the 2 arrays have the same length all the time
//  - [] The above problem has to be double checked
//  - [] Another problem is that in the checkPicks, to lose the game
//  - [] Last color doesn't flash (problem in repeatAndPick)
//  - [] Make work the timing for flashing

// for(let i = 0; i < level; i++) {
//     setTimeout(() => {
//         setAnimation(pickedColorsByApp[i]);
//     }, i * 1300);
//     console.log(pickedColorsByApp);
// }


//  If I add the flash animation, I can't remove it in the moment, so I have to check if the given element has it, and if has, remove it
//  The solution is the Element.classList.toggle();
