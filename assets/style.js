function getNum() {
    return Math.floor(Math.random() * 6) + 1;
}

function p1NumToImg(num) {
    let p1Img = document.querySelector(".p1-img");
    p1Img.setAttribute("src", "./assets/dice" + num + ".png");
}

function p2NumToImg(num) {
    let p2Img = document.querySelector(".p2-img");
    p2Img.setAttribute("src", "./assets/dice" + num + ".png");
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
