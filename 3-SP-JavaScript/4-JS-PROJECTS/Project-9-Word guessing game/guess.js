// List of words for the game
const words = ["javascript", "programming", "developer", "hangman", "coding"];

// Function to select a random word from the list
function selectRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}

// Function to initialize the game
function startGame() {
    const wordToGuess = selectRandomWord();
    const guessedLetters = [];
    let attemptsLeft = 6;

    console.log("Welcome to the Word Guessing Game!");
    console.log("The word has", wordToGuess.length, "letters.");
    console.log("You have", attemptsLeft, "attempts to guess the word.");

    while (attemptsLeft > 0) {
        const displayWord = wordToGuess
            .split('')
            .map(letter => guessedLetters.includes(letter) ? letter : "_")
            .join(' ');

        console.log("\nCurrent word:", displayWord);
        const guess = prompt("Guess a letter:").toLowerCase();

        if (guess.length !== 1) {
            console.log("Please enter a single letter.");
            continue;
        }

        if (guessedLetters.includes(guess)) {
            console.log("You already guessed that letter.");
            continue;
        }

        guessedLetters.push(guess);

        if (wordToGuess.includes(guess)) {
            console.log("Correct guess!");
            if (!displayWord.includes("_")) {
                console.log("Congratulations, you guessed the word:", wordToGuess);
                break;
            }
        } else {
            attemptsLeft--;
            console.log("Incorrect guess. Attempts left:", attemptsLeft);
            if (attemptsLeft === 0) {
                console.log("Sorry, you're out of attempts. The word was:", wordToGuess);
            }
        }
    }
}

// Start the game
startGame();
