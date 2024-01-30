const randNum = Math.floor(Math.random() * 10) + 1;
let guesses = 0;

document.querySelector("#submitBtn").onclick = function() {
    let guess = document.querySelector("#guessInput").value;
    guesses += 1;

    if (guess == randNum) {
        alert(`${randNum} is the number. It took you ${guesses} guess(es)`);
    }
    else if (guess < randNum) {
        alert("Too low. Try again");
    }
    else if (guess > randNum){
        alert("Too high, try again");
    }
    else {
        alert("Please enter a valid number from 1 - 10");
    }
}