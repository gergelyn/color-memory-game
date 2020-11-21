//  Global Variables
let colorNum = 4;
let level = 2;
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
    console.log(pickedColorsByUser);
    setAnimation("green");
    checkPicks();
});

redBox.addEventListener('click', event => {
    console.log('Red has clicked');
    pickedColorsByUser.push("red");
    console.log(pickedColorsByUser);
    setAnimation("red");
    checkPicks();
});

yellowBox.addEventListener('click', event => {
    console.log('Yellow has clicked');
    pickedColorsByUser.push("yellow");
    console.log(pickedColorsByUser);
    setAnimation("yellow");
    checkPicks();
});

blueBox.addEventListener('click', event => {
    console.log('Blue has clicked');
    pickedColorsByUser.push("blue");
    console.log(pickedColorsByUser);
    setAnimation("blue");
    checkPicks();
});

//  Functions

let getRandomInteger = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
};

let setAnimation = (color) => {
    console.log("Before add: " + document.querySelector("#"+color).outerHTML);  //  Just for testing
    document.querySelector("#"+color).classList.add("flash");
    console.log("After add: " + document.querySelector("#"+color).outerHTML);   //  Just for testing
    setTimeout(() => {
        console.log("Before remove: " + document.querySelector("#"+color).outerHTML);
        document.querySelector("#"+color).classList.remove("flash");
        console.log("After remove: " + document.querySelector("#"+color).outerHTML);
    }, 650);    
};

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
    for(let i = 0; i < pickedColorsByUser.length; i++) {
        if(pickedColorsByApp[i] != pickedColorsByUser[i]) {
            gameLost();
        } else {
            console.log("You got this!");
        }
    }
};

let pickColorByApp = () => {
    let pickedRandomInteger = getRandomInteger(colorNum);
    switch(pickedRandomInteger) {
        case 0:
            pickedColorsByApp.push("green");
            // setAnimation(greenBox);
            break;
        case 1:
            pickedColorsByApp.push("red");
            // setAnimation(redBox);
            break;
        case 2:
            pickedColorsByApp.push("yellow");
            // setAnimation(yellowBox);
            break;
        case 3:
            pickedColorsByApp.push("blue");
            // setAnimation(blueBox);
            break;
    }
};

pickColorByApp();
pickColorByApp();

for(let i = 0; i < level; i++) {
    setTimeout(() => {
        setAnimation(pickedColorsByApp[i]);
    }, i * 1300);
    console.log(pickedColorsByApp);
}


//  If I add the flash animation, I can't remove it in the moment, so I have to check if the given element has it, and if has, remove it
//  The solution is the Element.classList.toggle();
