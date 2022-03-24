const Tennis = require ('./tennis');

describe ('Tennis kata score', ()=>{
    test('returns love all', ()=>{
        const tennis = new Tennis();
        expect(tennis.score()).toBe('love all');
    });
    test('returns fifteen love', ()=>{
        const tennis = new Tennis();
        tennis.playerOneTurns(1);
        expect(tennis.score()).toBe('fifteen love');
    });

    test('returns thirty love', ()=>{
        const tennis = new Tennis();
        tennis.playerOneTurns(2);
        expect(tennis.score()).toBe('thirty love');
    });

    test('returns forty love', ()=>{
        const tennis = new Tennis();
        tennis.playerOneTurns(3);
        expect(tennis.score()).toBe('forty love');
    });

    test('returns love fifteen', ()=>{
        const tennis = new Tennis();
        tennis.playerTwoTurns(1);
        expect(tennis.score()).toBe('love fifteen');
    });

    test('returns love thirty', ()=>{
        const tennis = new Tennis();
        tennis.playerTwoTurns(2);
        expect(tennis.score()).toBe('love thirty');
    });

    test('returns love forty', ()=>{
        const tennis = new Tennis();
        tennis.playerTwoTurns(3);
        expect(tennis.score()).toBe('love forty');
    });

    test('returns fifteen all', ()=>{
        const tennis = new Tennis();
        tennis.playerOneTurns(1);
        tennis.playerTwoTurns(1);
        expect(tennis.score()).toBe('fifteen all');
    });
})