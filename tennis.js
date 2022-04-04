class Tennis{

    playerOne = 0;
    playerTwo = 0;

    scoreTable = {
        0: "love",
        1: "fifteen",
        2: "thirty",
        3: "forty",
        4: "win"
    }

    score(){
        if(this.playerOne != this.playerTwo){
            if(this.playerOne == 4 || this.playerTwo == 4){
                const playerName = this.playerOne > this.playerTwo ? "playerOne" : "playerTwo" || this.playerOne < this.playerTwo ? "playerTwo" : "playerOne";
                if(Math.abs(this.playerOne - this.playerTwo) == 1){
                    return `${playerName} adv`;
                }                
                return `${playerName} win`;
            }
            return `${this.scoreTable[this.playerOne]} ${this.scoreTable[this.playerTwo]}`;
        }
        if(this.playerOne >= 3){
            return "deuce";
        }
        return `${this.scoreTable[this.playerOne]} all`;
    }
    
    playerOneTurns(turns){
        if(this.scoreTable[this.playerOne] == 'win' || this.scoreTable[this.playerTwo] == 'win'){
            throw new Error("Game over");
        }
        for (let i = 0; i < turns; i++) {
            this.playerOne++;
        }
    }

    playerTwoTurns(turns){
        if(this.scoreTable[this.playerOne] == 'win' || this.scoreTable[this.playerTwo] == 'win'){
            throw new Error("Game over");
        }
        for (let i = 0; i < turns; i++) {
            this.playerTwo++;
        }
    }
}

module.exports = Tennis;