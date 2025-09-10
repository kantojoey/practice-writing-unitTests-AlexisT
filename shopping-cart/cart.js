// 1. addItem(cart, item, quantity): Adds an item to the cart.
function addItem(cart, item, quantity){
    for(let i = 1; i <= quantity; i++){
        cart.push(item);
    }
    return cart;
};

console.log(addItem([], "bread", -2));
// 2. removeItem(cart, item): Removes an item from the cart.
function removeItem(cart, item){
    let index = cart.indexOf(item);
    if(cart.includes(item)){
        cart.splice(index, 1);
    }
    return cart;
};

// 3. getTotalItems(cart): Returns the total number of items in the cart.
// Tasks
function getTotalItems(cart){
    return cart.length;
};

// ○ Export the methods using module.exports.
module.exports = {addItem, removeItem, getTotalItems};