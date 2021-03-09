// Un alert espone 5 numeri casuali diversi.
// Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.


$(document).ready(function () {

    var randomNumbersList = [];

    var playerNumbersList = [];

    var randomNumber;

    var playerNumber;

    // var sec = 30;


    for (var i = 0; i < 5; i++) {

        randomNumber = genRandomnumbers(1, 100);

        console.log(randomNumber);

        if (randomNumbersList.indexOf(randomNumber) == -1) {

            randomNumbersList.push(randomNumber);
        }

    }

    console.log(randomNumbersList);

    alert("Memorizza questi numeri: " + randomNumbersList);


    // var count = setInterval(function() {

    //     $("#time").text(sec--);

    // }, 1000);


    setTimeout(function() {

        for (var i = 0; i < 5; i++) {

            playerNumber = parseInt(prompt("Inserisci il numero memorizzato"));

            for (var n = 0; n < randomNumbersList.length; n++) {

                if (playerNumber == randomNumbersList[n]) {

                    playerNumbersList.push(playerNumber);
                }
            }
        }

        alert("Hai memorizzato correttamente " + playerNumbersList.length + " numeri. I numeri sono: " + playerNumbersList);

        console.log(playerNumbersList);

    }, 30000);

});


function genRandomnumbers(min, max) {

    return Math.floor(Math.random() * (max - min)) + min;
}