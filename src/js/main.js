import $ from "jquery";
import _ from "lodash";

function validateCard() {

    var cardString = document.querySelector('.cardNumber').value;

    var card = cardString.split("");
    console.log("Original card number " + card);
    var card = _.reverse(card);
    console.log("Reversed card number " + card);

    var checkSum = 0;
    var i;
    var j;
    var cardSize = card.length;

    for (i = 0; i < cardSize; i++) {
      console.log(cardSize);
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
    if (modulusResult == 0){
            $( ".result" ).html("Your total checkSum is " + checkSum + ".  This results in a modulus remainder of " + modulusResult + ".  Your card number is valid.");
    }
    else {
      $( ".result" ).html("Your total checkSum is " + checkSum + ".  This results in a modulus remainder of " + modulusResult + ".  Your card number is invalid.");
    }
        console.log(checkSum);

}


$(".formButton").on("click", validateCard)
