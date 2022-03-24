const Tennis = require ('./tennis');

describe ('Tennis kata score', ()=>{
    test('returns love all', ()=>{
        const tennis = new Tennis();
        expect(tennis.score()).toBe('love all');
    });
    test('returns fifteen love', ()=>{
        const tennis = new Tennis();
        tennis.playerOne++;
        expect(tennis.score()).toBe('fifteen love');
    });

    test('returns thirty love', ()=>{
        const tennis = new Tennis();
        tennis.playerOne++;
        tennis.playerOne++;
        expect(tennis.score()).toBe('thirty love');
    });

    test('returns forty love', ()=>{
        const tennis = new Tennis();
        tennis.playerOne++;
        tennis.playerOne++;
        tennis.playerOne++;
        expect(tennis.score()).toBe('forty love');
    });

    test('returns love fifteen', ()=>{
        const tennis = new Tennis();
        tennis.playerTwo++;
        expect(tennis.score()).toBe('love fifteen');
    });
})