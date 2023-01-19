// to store randome number that genrates by computer.
let computer_guess;

//to store the number that has been guessed by user.
let user_guess = [];

// for guidence the number is high or low
let userGuessUpdate = document.getElementById("yourGuess");

//the number that has entered by user will be tackal by this.
let userNumberUpdate = document.getElementById("inputText")

// creating audio object
let input = new Audio("/audio/input.wav");
let negativeBeep = new Audio("/audio/negative_beeps-6008.mp3 ");
let selectMode = new Audio("/audio/select.wav");
let successStart = new Audio("/audio/success-fanfare-trumpets-6185.mp3");
let successEnd = new Audio("/audio/success end.mp3");

// to generate randomen number.
// the behaviour of onload of the app
function randome_number_generator() {
    computer_guess = Math.floor(Math.random() * 100);
    console.log(computer_guess);
    document.getElementById("newgameButton").style.display = "none";
    document.getElementById("gameArea").style.display = "none";
}

// select case modes 
const easyMode = () => {
    selectMode.play();
    maxGuess = 08;
    startgame();
}

const hardMode = () => {
    selectMode.play();
    maxGuess = 05;
    startgame();
}

// defination of startgame()
const startgame = () => {
    document.getElementById("gameArea").style.display = "block";
    document.getElementById("gameArea").style.backgroundColor = "#fdfdfd5e";
    document.getElementById("welcomeScreen").style.display = "none";

}

// main logic of our app
// onchange of the input box.  what will be happen?
const compareGuess = () => {
    input.play();
    let userNumber = Number(document.getElementById("inputText").value);
    user_guess = [...user_guess, userNumber];
    document.getElementById("guesses").innerHTML = user_guess;

    // number of priviouse attempt
    document.getElementById("attemps").innerHTML = user_guess.length;

    // check the value low , high or equal
    if (user_guess.length < maxGuess) {
        if (userNumber > computer_guess) {
            userGuessUpdate.innerHTML = "your guess is high";
            userNumberUpdate.value = "";

        }
        else if (userNumber < computer_guess) {
            userGuessUpdate.innerHTML = "your guess is low";
            userNumberUpdate.value = "";

        }
        else {
            successStart.play();
            userGuessUpdate.innerHTML =`it's correct 😃, The number is ${computer_guess}`;
            userNumberUpdate.value = "";
            successEnd.play();
            newGameStart();
        }

    }
    else {
        if (userNumber > computer_guess) {
            negativeBeep.play();
            userGuessUpdate.innerHTML = `You Loose.. !! The number was :${computer_guess}`;
            userNumberUpdate.value = "";
            newGameStart();
        }
        else if (userNumber < computer_guess) {
            negativeBeep.play();
            userGuessUpdate.innerHTML = userGuessUpdate.innerHTML = `You Loose.. !! The number was :${computer_guess}`;
            userNumberUpdate.value = "";
            newGameStart();
        }
        else {
            successStart.play();
            userGuessUpdate.innerHTML = `it's correct  😃, The number is ${computer_guess}`;
            userNumberUpdate.value = "";
            successEnd.play();
            newGameStart();

        }
    }
}
//  start new game 

const newGameStart = () => {
    document.getElementById("newgameButton").style.display = "inline";
    userNumberUpdate.setAttribute('disabled', true);

}

// start new game begine (page reload).
const newGameBegin = () => {
    window.location.reload();
}