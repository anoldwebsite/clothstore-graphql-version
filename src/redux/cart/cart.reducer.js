import CartActionType from './cart.types';
import { addItemToCart, removeItemFromCart } from './cart.utils';

const INITIAL_STATE = {
    hidden: true, //We want the cart dropdown to be hidden in the beginning.
    cartItems: []
};
const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionType.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden //Not using action.payload here.
            };
        case CartActionType.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            };
        case CartActionType.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            };
        case CartActionType.CLEART_ITEM_FROM_CART:
            return {
                ...state,//action.payload has that item that we want to remove from the cart.
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            };
        default:
            return state;
    }
};
export default cartReducer;