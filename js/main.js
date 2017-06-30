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
};


})();