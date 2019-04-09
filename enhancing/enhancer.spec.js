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

    describe('fail function', () => {
        it('not to change enhancement if enhancement is 0', () => {
            expect(enhancer.fail({ enhancement: 0 }).enhancement).toBe(0);
        });

        it('to change durability by -5 if enhancement is below 15', () => {
            expect(enhancer.fail({ enhancement: 14, durability: 15 }).durability).toBe(10);
        });

        it('to change durability by -10 if enhancement is above 14', () => {
            expect(enhancer.fail({ enhancement: 15, durability: 15 }).durability).toBe(5);
        })

        it('to change durability by -10 and enhancement by -1, if enhancement is above 16', () => {
            expect(enhancer.fail({ enhancement: 17, durability: 15 })).toEqual({ durability: 5, enhancement: 16 });
        })
       
    });

});