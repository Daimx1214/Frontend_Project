let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll('.choice');


const genCompChoice = () => {
    let option = ['rock', 'paper', 'scissor'];
    const randIdx = Math.floor(Math.random() * 3)
    // generates a random number between 0 or 1 or 2
    return option[randIdx];
}

const playGame = (userChoice) => {
    console.log('User Choice' , userChoice);
    const compChoice = genCompChoice();
    console.log('Computer Choice' , compChoice);

    if(userChoice === compChoice){
        console.log("It's a tie!");
        document.getElementById('resultMessage').innerText = "Game Tied. Play Again:)";
        resultMessage.style.background = "gray";
    }
    else if((userChoice === 'rock' && compChoice === 'scissor') ||
            (userChoice === 'paper' && compChoice === 'rock') ||
            (userChoice === 'scissor' && compChoice === 'paper')){
                console.log("You win!");
                userScore++;
                document.getElementById('user-score').innerText = userScore;
                document.getElementById('resultMessage').innerText = "You win!🎉";
                resultMessage.style.background = "green";

            }
    else{
        console.log("Computer wins!");
        computerScore++;
        document.getElementById('computer-score').innerText = computerScore;
        document.getElementById('resultMessage').innerText = "Computer wins! 🖥";
        resultMessage.style.background = "red";
    }
}

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener('click', () => {
        let userChoice = choice.getAttribute('id');
        
        playGame(userChoice)
    })
});