function coinFlip() {
    let coinFlip = Math.round(Math.random());

    // Prompt the user to select Heads or Tails.
    let userChoice = prompt("Heads or Tails?");
    userChoice = userChoice.toLowerCase();

    // Determine the result of the coin flip.
    let result = coinFlip === 0 ? "heads" : "tails";

    // Determine if the user's choice matches the result.
    if ( "heads" === userChoice || "tails" === userChoice ) {
        if (result === userChoice) {
            document.getElementById("output").innerHTML = "The flip was " + result + " and you chose " + userChoice + "...you win!";
        } else {
            document.getElementById("output").innerHTML = "The flip was " + result + " and you chose " + userChoice + "...you lose!";
        }
    }
}