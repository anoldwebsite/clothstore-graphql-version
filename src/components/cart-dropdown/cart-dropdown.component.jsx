import {
  CartDropdownContainer,
  CartDropdownButton,
  EmptyMessageContainer,
  CartItemsContainer
} from './cart-dropdown.styles';
import React from "react";
import CartItem from "../cart-item/cart-item.component";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <CartDropdownContainer>
    <CartItemsContainer>
      {cartItems.length ? ( //If there are items in the cart
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        //If there are no items in the cart
        <EmptyMessageContainer>Your cart is empty.</EmptyMessageContainer>
      )}
    </CartItemsContainer>
    <CartDropdownButton
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden());
      }}
    >
      Go to Checkout
    </CartDropdownButton>
  </CartDropdownContainer>
);
//We need to get cartItems from the state of the app but we will destructure and get props that we need instead of the whole state.
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems, //returning an object with cartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown)); //Now, we have access to
//match, history and location object as the withRouter supplies these things to the input component.
