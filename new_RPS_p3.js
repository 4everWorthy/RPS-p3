// Array of possible hand options
const hands = ['rock', 'paper', 'scissors'];

// Function to get a random hand
function getHand() {
    // Math.random() generates a random number between 0 and 1.
    return hands[parseInt(Math.random() * 10) % 3];
    // "parse" means to analyze a string and convert it into another data type.
        // Int is short for "integer," a whole number without fractional parts.
            // Example: Math.random() returns 0.734. Multiplying by 10 gives 7.34
                // parseInt(7.34) converts this to 7 by removing the decimal part. 
                    // % returns the remainder of division.
                        // This ensures the result is always one of three possible values: 0, 1, or 2.
}   

// Object representing player1
const player1 = {
    name: "John", // Player's name
    score: 0, // Player's score, starts at 0
    getHand: getHand // Assign the getHand function to player1
};

// Object representing player2
const player2 = {
    name: "Jane", // Player's name
    score: 0, // Player's score, starts at 0
    getHand: getHand // Assign the getHand function to player2
};

// Function to play a round of the game
function playRound() {
    // Get a hand for each player
    const hand1 = player1.getHand();
    const hand2 = player2.getHand();
        // The main purpose of these lines is to generate a random choice (either 'rock', 'paper', or 'scissors') for both players at the start of each round.
            // 'getHand' is responsible for generating a random hand, while the playRound function is responsible for managing the round's logic and determining the winner.
            
    // Initialize the result message
    let resultMessage = `${player1.name} plays ${hand1}, ${player2.name} plays ${hand2}. `;

    // Determine the result of the round
    if (hand1 === hand2) {
        // It's a tie
        resultMessage += "It's a tie!";
    } else if (
        (hand1 === 'rock' && hand2 === 'scissors') ||
        (hand1 === 'scissors' && hand2 === 'paper') ||
        (hand1 === 'paper' && hand2 === 'rock')
    ) {
        // Player1 wins
        player1.score++; // Increment player1's score
        resultMessage += `${player1.name} wins!`;
    } else {
        // Player2 wins
        player2.score++; // Increment player2's score
        resultMessage += `${player2.name} wins!`;
    }

    // Update the result message in the HTML
    document.getElementById('result').innerText = resultMessage;  // The result and updated scores are displayed on the webpage using document.getElementById to find and update the relevant HTML elements.
    // Update player1's score in the HTML
    document.getElementById('player1-score').innerText = `${player1.name}: ${player1.score}`;
    // Update player2's score in the HTML
    document.getElementById('player2-score').innerText = `${player2.name}: ${player2.score}`;
}   

// Adds a click event listener to the button with the ID play-round
document.getElementById('play-round').addEventListener('click', playRound);

