import React from "react";
import {
  AddToCartButton,
  BackgroundImage,
  CollectionFooterContainer,
  CollectionItemContainer,
  NameContainer,
  PriceContainer
} from './collection-item.styles';
import { addItem as unboundImportedAddItem } from "../../redux/cart/cart.actions";
import { connect } from "react-redux";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer>
    <BackgroundImage className="image" imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>
      <AddToCartButton onClick={() => addItem(item)} inverted>
        Add to Cart
      </AddToCartButton>
    </CollectionItemContainer>
  );
};

//Writing our stateUpdater, called maptDispatchToProps in Redux docs.
const maptDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(unboundImportedAddItem(item)),
});

export default connect(null, maptDispatchToProps)(CollectionItem);
