import CartActionType from './cart.types';

export const toggleCartHidden = () => (
    {
        type: CartActionType.TOGGLE_CART_HIDDEN
        //payload is optional and we opt not to use it as we are not using it in cart.reducer.js
    }
);

export const addItem = item => ({
    type: CartActionType.ADD_ITEM,
    payload: item
});

export const removeItem = item => (
    {
        type: CartActionType.REMOVE_ITEM,
        payload: item
    }
);

export const clearItemFromCart = item => ({
    type: CartActionType.CLEART_ITEM_FROM_CART,
    payload: item
});