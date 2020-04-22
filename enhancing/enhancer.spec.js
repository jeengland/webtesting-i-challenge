const {succeed, fail, repair, get} = require('./enhancer.js');
// test away!
describe('repair', () => {
    it('should restore an item\'s durability', () => {
        let testItem = {
            name: 'Bronze Dagger',
            enhancement: 0,
            durability: 60
        };
        testItem = repair(testItem);
        expect(testItem.durability).toBe(100);
    });
});

describe('succeed', () => {
    it('should raise an item\'s enhancement level', () => {
        let testItem = {
            name: 'Iron Short Sword',
            enhancement: 0,
            durability: 45
        };
        testItem = succeed(testItem);
        expect(testItem.enhancement).toBe(1);
    });
    it('should not raise an item\'s enhancement above max', () => {
        let testItem = {
            name: 'Zodiac Spear',
            enhancement: 20,
            durability: 68
        };
        testItem = succeed(testItem);
        expect(testItem.enhancement).toBe(20);
    });
    it('should leave durability unchanged', () => {
        let testItem = {
            name: 'Dragon Axe',
            enhancement: 13,
            durability: 11
        };
        testItem = succeed(testItem);
        expect(testItem.durability).toBe(11);
    });
});

describe('fail', () => {
    it('should decrease durability by 5 on items with enhancement >= 15', () => {
        let testItem = {
            name: 'Flaming Bow',
            durability: 15,
            enhancement: 7
        };
        testItem = fail(testItem);
        expect(testItem.durability).toBe(10);
    });
    it('should decrease durability by 10 on items with enhancement > 15', () => {
        let testItem = {
            name: 'Staff of Wing and Song',
            durability: 44,
            enhancement: 16
        };
        testItem = fail(testItem);
        expect(testItem.durability).toBe(34);
    });
    it('should decrease enhancement by 1 on items with enhancement > 16', () => {
        let testItem = {
            name: 'Magma Pickaxe', 
            durability: 78,
            enhancement: 19
        };
        testItem = fail(testItem);
        expect(testItem.enhancement).toBe(18);
    });
});

describe('get', () => {
    it('should rename an item to include its enhancement value', () => {
        let testItem = {
            name: 'Mithril Hatchet',
            enhancement: 10,
            durability: 72
        };
        testItem = get(testItem);
        expect(testItem.name).toBe('[+10] Mithril Hatchet');
    })
    it('should not rename items with 0 enhancement', () => {
        let testItem = {
            name: 'Throwing Knife',
            enhancement: 0,
            durability: 87
        };
        testItem = get(testItem);
        expect(testItem.name).toBe('Throwing Knife');
    })
})