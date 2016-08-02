import $ from "jquery";
import _ from "lodash";

function getCard() {
    var cardString = document.querySelector('.cardNumber').value;
    var card = cardString.split("");
    return card = _.reverse(card);
}

function printResults(mod, check) {
    var result = "Your total checkSum is " + check + ".  This results in a modulus remainder of " + mod + ".  "
    if (mod == 0) {
        $(".result").html(result + "Your card number is valid.");
    } else {
        $(".result").html(result +  "Your card number is invalid.");
    }
}

function validateCard() {

    var card = getCard();
    var checkSum = 0;
    var i, j;
    var cardSize = card.length;

    for (i = 0; i < cardSize; i++) {
        var firstNumber = card.shift();
        firstNumber = Number(firstNumber);
        // If reversed array position is even
        if (i % 2 == 0) {
            checkSum = checkSum + firstNumber;
            // If reversed array position is odd
        } else {
            firstNumber = (firstNumber * 2)
                // Check if doubled number is a 2 position number (>9)
            if (firstNumber > 9) {
                var digits = ("" + firstNumber).split("");
                var number1 = digits.splice(-1, 1);
                var number2 = digits.splice(0, 1);
                firstNumber = Number(number1) + Number(number2);
            }
            checkSum = checkSum + firstNumber;
        }
    }
    var modulusResult = (checkSum % 10);
    printResults(modulusResult, checkSum);
}

$(".formButton").on("click", validateCard)
