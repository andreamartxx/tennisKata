class Tennis{

    playerOne = 0;

    score(){
        if(this.playerOne == 1){
            return 'fifteen love';
        }
        return 'love all';
    }

}

module.exports = Tennis;