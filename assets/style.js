function getNum() {
    return Math.floor(Math.random() * 6);
}

function p1NumToImg(num) {
    let p1Img = document.querySelector(".p1-img");
    if(num === 0) {
        p1Img.setAttribute("src", "./assets/dice1.png");
    } else if(num === 1) {
        p1Img.setAttribute("src", "./assets/dice2.png");
    } else if(num === 2) {
        p1Img.setAttribute("src", "./assets/dice3.png");
    } else if(num === 3) {
        p1Img.setAttribute("src", "./assets/dice4.png");
    } else if(num === 4) {
        p1Img.setAttribute("src", "./assets/dice5.png");
    } else if(num === 5) {
        p1Img.setAttribute("src", "./assets/dice6.png");
    }
}

function p2NumToImg(num) {
    let p2Img = document.querySelector(".p2-img");
    if(num === 0) {
        p2Img.setAttribute("src", "./assets/dice1.png");
    } else if(num === 1) {
        p2Img.setAttribute("src", "./assets/dice2.png");
    } else if(num === 2) {
        p2Img.setAttribute("src", "./assets/dice3.png");
    } else if(num === 3) {
        p2Img.setAttribute("src", "./assets/dice4.png");
    } else if(num === 4) {
        p2Img.setAttribute("src", "./assets/dice5.png");
    } else if(num === 5) {
        p2Img.setAttribute("src", "./assets/dice6.png");
    }
}

function theWinner(num1, num2) {
    let h1Heading = document.querySelector("h1");
    if(num1 > num2) {
        h1Heading.innerHTML = "The winner is Player 1!";
    } else if(num1 < num2) {
        h1Heading.innerHTML = "The winner is Player 2!";
    } else {
        h1Heading.innerHTML = "Tie!";
    }
}

function rollTheDice() {
    
    let num1 = getNum();
    let num2 = getNum();

    p1NumToImg(num1);
    p2NumToImg(num2);

    theWinner(num1, num2);
}

document.querySelector("button").addEventListener("click", rollTheDice);