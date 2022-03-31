module.exports = class Tennis{

    playerOne = 0;
    playerTwo = 0;

    scoreTable = {
        0: 'love',
        1: 'fifteen',
        2: 'thirty',
        3: 'forty',
        4: 'win'
    }

    score(){
        if(this.differencePlayers()){
            if(this.winPlayer()){
                const advName = this.playerOne > this.playerTwo ? "playerOne" : "playerTwo" || this.playerOne < this.playerTwo ? 'playerTwo' : 'playerOne';
                if(this.advPlayer()){
                    return `${advName} adv`;
                }
                return (`${advName} win`);
            }
            return `${this.scoreTable[this.playerOne]} ${this.scoreTable[this.playerTwo]}`;
        }
        if(this.deuce()){
            return 'deuce';
        }
        
        return `${this.scoreTable[this.playerOne]} all`;

    }

    advPlayer() {
        return Math.abs(this.playerOne - this.playerTwo) == 1;
    }

    winPlayer() {
        return this.playerOne > 3 || this.playerTwo > 3;
    }

    deuce() {
        return this.playerOne >= 3;
    }

    differencePlayers() {
        return this.playerOne != this.playerTwo;
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


