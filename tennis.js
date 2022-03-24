class Tennis{

    playerOne = 0;

    scoreTable = {
        1: 'fifteen',
        2: 'thirty',
        3: 'forty'
    }

    score(){
        if(this.playerOne >0){
            return `${this.scoreTable[this.playerOne]} love`;
        }
        return 'love all';
    }

}

module.exports = Tennis;