
function printTennis(){
    
    const Tennis = require('./tennis');

    const tennis = new Tennis();

    const prompt = require("prompt-sync")();

    
    for (let i = 0; i < 50; i++) {
        
        players = prompt('Which player scores? ');

        if(players == 1){
            tennis.playerOneTurns(1);
            console.log(tennis.score());
        }else if(players == 2){
            tennis.playerTwoTurns(1);
            console.log(tennis.score());
        }
    }
    
}

printTennis();