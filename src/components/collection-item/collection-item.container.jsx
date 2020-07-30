import React from "react";
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";

import CollectionItem from "./collection-item.component";

const ADD_ITEM_TO_CART = gql`
  mutation AddItemToCart($item: Item!) {
    addItemToCart(item: $item) @client
  }
`;

const CollectionItemContainer = (props) => (
  <Mutation mutation={ADD_ITEM_TO_CART}>
    {(addItemToCart) => (
      <CollectionItem
        {...props} //This gives the item which is in the props supplied by CollectionsPreview component
        //The function addItem below will get as arguments the item
        addItem={(item) => addItemToCart(
            //We get addItemToCart from the mutation
            {
              //We pass an object to addItemToCart that has a key variables
              variables: {
                //key is item and value is the actual item that the user wants to add to the cart
                //item: item but we can write the shortcut because the key and the value are the same.
                item
              },
            }
          )
        }
      />
    )}
  </Mutation>
);

export default CollectionItemContainer;
