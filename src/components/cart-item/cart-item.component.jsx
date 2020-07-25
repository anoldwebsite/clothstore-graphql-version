import {
  CartItemContainer,
  CartItemImage,
  ItemDetailsContainer
} from './cart-items.styles';
import React from "react";

//Destructure item from props and then from item destructure props that we need.
const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <CartItemImage src={imageUrl} alt="item" />
    <ItemDetailsContainer>
      <span>{name}</span>
      <span>
        {quantity} x ${price}
      </span>
    </ItemDetailsContainer>
  </CartItemContainer>
);

export default CartItem;
