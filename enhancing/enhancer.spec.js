const {succeed, fail, repair, get} = require('./enhancer.js');
// test away!
describe('repair', () => {
    it('should restore an item\'s durability', () => {
        let testItem = {
            name: 'Bronze Dagger',
            enhancement: 0,
            durability: 60,
        }
        testItem = repair(testItem);
        expect(testItem.durability).toBe(100)
    })
})

describe('succeed', () => {
    it('should raise an item\'s enhancement level', () => {
        let testItem = {
            name: 'Bronze Dagger',
            enhancement: 0,
            durability: 60,
        };
        testItem = succeed(testItem);
        expect(testItem.enhancement).toBe(1);
    });
    it('should not raise an item\'s enhancement above max', () => {
        let testItem = {
            name: 'Zodiac Spear',
            enhancement: 20,
            durability: 68,
        };
        testItem = succeed(testItem);
        expect(testItem.enhancement).toBe(20);
    })
    it('should leave durability unchanged', () => {
        let testItem = {
            name: 'Dragon Axe',
            enhancement: 13,
            durability: 11,
        };
        testItem = succeed(testItem);
        expect(testItem.durability).toBe(11);
    })
})