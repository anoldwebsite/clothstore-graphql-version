import {
  CartDropdownContainer,
  CartDropdownButton,
  EmptyMessageContainer,
  CartItemsContainer,
} from "./cart-dropdown.styles";
import React from "react";
import CartItem from "../cart-item/cart-item.component";
import { withRouter } from "react-router-dom";

const CartDropdown = ({ cartItems, history, toggleCartHidden }) => (
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
        toggleCartHidden();
      }}
    >
      Go to Checkout
    </CartDropdownButton>
  </CartDropdownContainer>
);

export default withRouter(CartDropdown);
