import {
  CartContainer,
  ItemCountContainer,
  PriceCountContainer,
  ShoppingIcon,
} from "./cart-icon.styles";
import React from "react";

const CartIcon = ({ toggleCartHidden, itemsCount, itemsTotalPrice }) => (
  <CartContainer onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <ItemCountContainer>{itemsCount}</ItemCountContainer>
    <PriceCountContainer>$ {itemsTotalPrice}</PriceCountContainer>
  </CartContainer>
);

export default CartIcon;
