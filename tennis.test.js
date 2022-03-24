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
})