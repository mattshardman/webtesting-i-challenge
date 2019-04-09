const enhancer = require('./enhancer.js');
// test away!
describe('enhancer functions', () => {
    describe('repair function', () => {
        it('Should return durability to full', () => {
            expect(enhancer.repair().durability).toBe(100);
        });    
    });
   

});