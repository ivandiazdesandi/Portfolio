/****************Variables**************/

var randomNumber1 = Math.ceil((Math.random() * 6))
var randomNumber2 = Math.ceil((Math.random() * 6))



/****************Functions**************/


/****************If you are going to use this function, your (t) value 
 ****************has to be between "" because we are using querySelector()
 ****************this (t) has to be a image class                         */

function addImage (n, t){
    if (n === 1){
        document.querySelector(t).setAttribute("src", "images/dice1.png");
    }else if (n === 2){
        document.querySelector(t).setAttribute("src", "images/dice2.png");
    }else if (n === 3){
        document.querySelector(t).setAttribute("src", "images/dice3.png");
    }else if (n === 4){
        document.querySelector(t).setAttribute("src", "images/dice4.png");
    }else if (n === 5){
        document.querySelector(t).setAttribute("src", "images/dice5.png");
    }else if (n === 6){
        document.querySelector(t).setAttribute("src", "images/dice6.png");
    }
}


/****************Code**************/


addImage(randomNumber1, ".dic1") 
addImage(randomNumber2, ".dic2")


if(randomNumber1 === randomNumber2){
    document.querySelector("h1").innerText = 'Draw!'
} else if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerText = '🚩 Player 1 wins!!'
}else{
    document.querySelector("h1").innerText = 'Player 2 wins! 🚩'
}
