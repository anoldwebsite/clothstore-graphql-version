import {
  CartContainer,
  ItemCountContainer,
  PriceCountContainer,
  ShoppingIcon,
} from "./cart-icon.styles";
import React from "react";
import { connect } from "react-redux";
import {
  selectCartItemsCount,
  selectCartItemsPrice,
} from "../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";

const CartIcon = ({ toggleCartHidden, itemsCount, itemsTotalPrice }) => (
  <CartContainer onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <ItemCountContainer>{itemsCount}</ItemCountContainer>
    <PriceCountContainer>$ {itemsTotalPrice}</PriceCountContainer>
  </CartContainer>
);

//Select function called mapStateToProps in Redux documentation.
const mapStateToProps = createStructuredSelector({
  itemsCount: selectCartItemsCount,
  itemsTotalPrice: selectCartItemsPrice,
});

export default connect(mapStateToProps)(CartIcon);
