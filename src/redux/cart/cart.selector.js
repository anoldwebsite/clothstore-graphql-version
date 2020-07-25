import { createSelector } from 'reselect';

//Get that slice of the state of the app that is related to cart.
//This is an input selector and they don't need to use createSelector.
const selectCart = state => state.cart;

export const selectCartHidden = createSelector(
    [selectCart],
    (cart) => cart.hidden
);

//This is an output selector and here we need to use createSelector.
export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);
//Now, we can compose the selector above in another selector
// that gives us the total of items in a user's cart.
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) =>
    cartItems
        .reduce((accumulatedQuantity, cartItem) => (accumulatedQuantity + cartItem.quantity), 0)
);
//We can write another selector for the total price of the items
export const selectCartItemsPrice = createSelector(
    [selectCartItems],
    (cartItems) =>
    cartItems
        .map(cartItem => cartItem.quantity * cartItem.price)
        .reduce((accumulatedPriceAllItems, priceThisCartItem) => (accumulatedPriceAllItems + priceThisCartItem), 0)
);
