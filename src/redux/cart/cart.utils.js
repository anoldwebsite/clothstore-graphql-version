export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );
    if (existingCartItem) {//Item already exists in the cart.
        //Function map returns a new array
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }
    //If it is a new item which does not exist in the cart
    //Quantity property gets attched for the firtst time for each product
    // that has not been previously added to the cart.
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
};
export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    );
    if (existingCartItem.quantity === 1) {
        // quantity is just one for this item; so we have to delete it from the cart
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    }
    return cartItems.map(cartItem => 
        (cartItem.id === cartItemToRemove.id)//Find out the item that we are looking for using id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }//True case
        : cartItem //false case
    );
};
