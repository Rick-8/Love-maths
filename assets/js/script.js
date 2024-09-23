// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("you clicked Submit!");
            } else {
                let gametype = this.getAttribute("data-type");
                alert(`You Clicked ${gametype}`);
            }
        })
    }
})

function rungame() {

}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditiononQuestion() {

}

function displySubtractQuestion() {

}

function displayMultiplyQuestion() {

}