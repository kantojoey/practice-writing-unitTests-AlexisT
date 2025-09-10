const cart = require('../cart.js');

// 1. addItem
// ○ Positive: Add a new item with a valid name and quantity.
// ○ Negative: Add an item with a negative quantity.
// ○ Edge Case: Add an item with a quantity of 0.
describe("addItem", function(){
    test("should return an array with item argument added to end", function(){//Positive Case
        expect(cart.addItem([],"Jest",2)).toStrictEqual(["Jest", "Jest"]);
    });

    test("should return an empty array", function(){//Negative Case
        expect(cart.addItem([], "Jest", -1)).toStrictEqual([])
    });

    test("should return an empty array", function(){//Edge Case
        expect(cart.addItem([], "Jest", 0)).toStrictEqual([]);
    })
});

// 2. removeItem
// ○ Positive: Remove an existing item from the cart.
// ○ Negative: Attempt to remove an item not in the cart.
// ○ Edge Case: Remove the last item from the cart.
describe("removeItem", function(){
    test("should return array with existing item removed", function(){//Positive Case
        expect(cart.removeItem(["bread", "milk", "bananas"], "milk")).toStrictEqual(["bread", "bananas"]);
    });

    test("should return an empty array", function(){//Negative Case
        expect(cart.removeItem([], "bread")).toStrictEqual([]);
    });

    test("should return array with last item removed", function(){//Edge Case
        expect(cart.removeItem(["bread", "milk", "bananas"], "bananas")).toStrictEqual(["bread", "milk"]);
    })
})

// 3. getTotalItems
// ○ Positive: Calculate the total number of items correctly.
// ○ Negative: Handle an empty cart.
// ○ Edge Case: Calculate with large quantities.
describe("getTotalItems", function(){
    test("should return the correct number of items in cart", function(){
        expect(cart.getTotalItems(["a", "b", "c"])).toBe(3);
    });

    test("should return 0", function(){
        expect(cart.getTotalItems([])).toBe(0);
    });

    test("should return the correct number of items in cart", function(){
        expect(cart.getTotalItems(["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a"])).toBe(34);
    });
});