const tennis = require ('./tennis');

describe('tennis kata score', ()=>{
    test('returns love all', ()=>{
        const tennis = new Tennis();
        expect(tennis.score()).toBe('Love all');
    })
})