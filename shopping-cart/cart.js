// 1. addItem(cart, item, quantity): Adds an item to the cart.
function addItem(cart, item, quantity){
    try{
        if(Number(quantity) > 0){
            for(let i = 1; i <= quantity; i++){
                cart.push(item);
            }
        } else{
            throw new Error("Quantity must be greater than 0.");
        }
    }catch(err){
        console.log("Error:", err.message);
    }finally{
        return cart;
    }
};
// let myCart = [];
// addItem(myCart, "bananas", 2);
// console.log(myCart);
// console.log(addItem(myCart, "bread", -1));

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