let button_input = document.querySelector(".submit");

generateRandomNumber = () => {
    return Math.floor(Math.random() * 10) + 1;
};

gameOver = randomNumber => {
    alert(
        `Game Over! You failed to guess within three attempts. The number was ${randomNumber}`
    );
};

// gameWon = randomNumber => {
//     alert(`Success, the number was ${randomNumber}\nAttempts: ${counter}`);
// };

guessNumber = randomNumber => {
    let guessNumber = prompt("Guess a number between 1-10:");
    while (
        isNaN(guessNumber) ||
        guessNumber > 10 ||
        guessNumber < 0 ||
        guessNumber == ""
    ) {
        if (guessNumber == "cheat") console.log(randomNumber);
        guessNumber = prompt("Please pick a number between 1-10:");
    }
    if (guessNumber === null) {
        gameOver(randomNumber);
    } else return guessNumber;
};

compareNumber = randomNumber => {
    let counter = 1;
    do {
        let userNumber = guessNumber(randomNumber);
        if (userNumber === undefined) return;
        if (userNumber == randomNumber) {
            alert(
                `Success, the number was ${randomNumber}\nAttempts: ${counter}`
            );
            return;
        } else {
            if (counter < 3) {
                if (!window.confirm("Nope sorry! Try again?")) {
                    break;
                }
            }
        }
        counter++;
    } while (counter <= 3);
    gameOver(randomNumber);
};

button_input.addEventListener("click", () => {
    let randomNumber = generateRandomNumber();
    compareNumber(randomNumber);
});
