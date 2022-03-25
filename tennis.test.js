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

    test('returns playerOne adv', ()=>{
        const tennis = new Tennis();
        tennis.playerOneTurns(4);
        tennis.playerTwoTurns(3);
        expect(tennis.score()).toBe('playerOne adv');
    });

    test('returns playerOne win', ()=>{
        const tennis = new Tennis();
        tennis.playerOneTurns(5);
        tennis.playerTwoTurns(3);
        expect(tennis.score()).toBe('playerOne win');
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

    test('returns playerTwo adv', ()=>{
        const tennis = new Tennis();
        tennis.playerOneTurns(3);
        tennis.playerTwoTurns(4);
        expect(tennis.score()).toBe('playerTwo adv');
    });

    test('returns playerOne win', ()=>{
        const tennis = new Tennis();
        tennis.playerOneTurns(3);
        tennis.playerTwoTurns(5);
        expect(tennis.score()).toBe('playerTwo win');
    });

    test('returns fifteen all', ()=>{
        const tennis = new Tennis();
        tennis.playerOneTurns(1);
        tennis.playerTwoTurns(1);
        expect(tennis.score()).toBe('fifteen all');
    });

    test('returns thirty all', ()=>{
        const tennis = new Tennis();
        tennis.playerOneTurns(2);
        tennis.playerTwoTurns(2);
        expect(tennis.score()).toBe('thirty all');
    });

    test('returns deuce', ()=>{
        const tennis = new Tennis();
        tennis.playerOneTurns(3);
        tennis.playerTwoTurns(3);
        expect(tennis.score()).toBe('deuce');
    });
})