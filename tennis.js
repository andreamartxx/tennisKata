class Tennis{

    playerOne = 0;
    playerTwo = 0;

    scoreTable = {
        1: 'fifteen',
        2: 'thirty',
        3: 'forty'
    }

    score(){
        if(this.playerOne >0){
            return `${this.scoreTable[this.playerOne]} love`;
        }
        if(this.playerTwo == 1){
            return 'love fifteen';
        }
        return 'love all';
    }

}

module.exports = Tennis;