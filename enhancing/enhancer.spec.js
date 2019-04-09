const enhancer = require('./enhancer.js');
// test away!
describe('enhancer functions', () => {
    describe('repair function', () => {
        it('Should return durability to full', () => {
            expect(enhancer.repair().durability).toBe(100);
        });    
    });
   
    describe('succeed function', () => {
        it('return 20 for enhancement, if enhancement is already 20', () => {
            expect(enhancer.succeed({ enhancement: 20 }).enhancement).toBe(20);

        });

        it('to return previous enhancement value + 1', () => {
            expect(enhancer.succeed({ enhancement: 16 }).enhancement).toBe(17);
            expect(enhancer.succeed({ enhancement: 13 }).enhancement).toBe(14);
            expect(enhancer.succeed({ enhancement: 16 }).enhancement).not.toBe(16)
        });
    });

});