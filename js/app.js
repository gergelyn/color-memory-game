let colorNum = 4;

let getRandomInteger = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
};



let pickedColorsByApp = [];
let pickedColorsByUser = [];

let pickColorByApp = () => {
    let pickedRandomInteger = getRandomInteger(colorNum);
    console.log(pickedRandomInteger);
    switch(pickedRandomInteger) {
        case 0:
            pickedColorsByApp.push("green");
            break;
        case 1:
            pickedColorsByApp.push("red");
            break;
        case 2:
            pickedColorsByApp.push("yellow");
            break;
        case 3:
            pickedColorsByApp.push("blue");
            break;
    }
};

let level = 10;

for(let i = 1; i <= level; i++) {
    pickColorByApp();
}

// Check 2 array's elements
// for(let i = 0; i < pickedColorsByApp.length; i++) {
//     if(pickedColorsByApp[i] != pickedColorsByUser[i]) {
//         return true;
//     } else {
//         return false;
//     }
// }


console.log(pickedColorsByApp);



