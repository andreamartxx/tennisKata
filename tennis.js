class Tennis{

    playerOne = 0;
    playerTwo = 0;

    scoreTable = {
        0: 'love',
        1: 'fifteen',
        2: 'thirty',
        3: 'forty'
    }

    score(){
        if(this.playerOne != this.playerTwo){
            if(this.playerOne > 3){
                return 'playerOne adv';
            }
            return `${this.scoreTable[this.playerOne]} ${this.scoreTable[this.playerTwo]}`;
        }
        if(this.playerOne >= 3){
            return 'deuce';
        }
        return `${this.scoreTable[this.playerOne]} all`;
    }

    playerOneTurns(time){
        for (let i = 0; i < time; i++) {
            this.playerOne++;
            
        }
    }

    playerTwoTurns(time){
        for (let i = 0; i < time; i++) {
            this.playerTwo++;
            
        }
    }

}

module.exports = Tennis;