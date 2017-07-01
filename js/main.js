(function(){


    var startBtn = document.getElementById("start-btn");
    startBtn.addEventListener("click", raffleStart);



function raffleStart() {
    var numAssoc = document.getElementById("associates").value;
    var numRaffle = document.getElementById("raffle").value;

    var results = [];

    
    for (var i = 0; i < numRaffle; i++) { 
        
        // Generate a random number, if a number already exists in the array then generate a new number
        do {
            var num = Math.floor(Math.random() * numAssoc) + 1;
        } while (results.indexOf(num) != -1);

        results.push(num);
    }

    console.log(results);
    randomizerDisplay(results);
};


})();

function randomizerDisplay(results) {
        var numAssoc = document.getElementById("associates").value;
        var raffle1 = document.getElementById("raffle-1");
        var raffleNumbers = document.querySelectorAll(".raffle-numbers");
        var i = 0;


        var randomizer = setInterval(function() {



            var randomNumbers = Math.floor(Math.random() * numAssoc) + 1;

            raffleNumbers.forEach(function(number) {
                number.innerHTML = Math.floor(Math.random() * numAssoc) + 1;
            });



 
        var timer = setTimeout(function() {

            clearInterval(randomizer);


            var i = 0
            raffleNumbers.forEach(function(numbers){
                if (results[i] == undefined) {
                    numbers.innerHTML = "00";
                } else {
                    numbers.innerHTML = results[i];

                }
                i++;
            });





            // console.log(results[0]);
        }, 1000);       

        }, 60);






}