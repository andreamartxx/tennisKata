class Tennis{

    playerOne = 0;

    score(){
        if(this.playerOne == 1){
            return 'fifteen love';
        }
        if(this.playerOne == 2){
            return 'thirty love';
        }
        if(this.playerOne == 3){
            return 'forty love';
        }
        return 'love all';
    }

}

module.exports = Tennis;