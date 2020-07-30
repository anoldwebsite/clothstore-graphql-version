import React from "react";
import { Mutation, Query } from "react-apollo";
import { gql } from "apollo-boost";

import CartDropdown from "./cart-dropdown.component";

const TOGGLE_CART_HIDDEN = gql`
  mutation ToggleCartHidden {
    toggleCartHidden @client
  }
`;
//Querty to get the existing items in the cart from the cache.
const GET_CART_ITEMS = gql`
  {
    cartItems @client
  }
`;

const CartDropdownContainer = () => (
  <Mutation mutation={TOGGLE_CART_HIDDEN}>
    {
      //togglCartHidden is returned by the mutation
      ({togglCartHidden}) => (//??????? was not destructured.
        <Query query={GET_CART_ITEMS}>
          {
            //The query returns an object and we destructure data from it
            //From that data, we destructure cartItems
            ({ data: { cartItems } }) => (
              <CartDropdown
                cartItems={cartItems}
                togglCartHidden={togglCartHidden}
              />
              /*
                                  We are wrapping the component CartDropdown so 
                                  that it gets the two functionalities 
                                  cartItems and toggleCartHidden
                              */
            )
          }
        </Query>
      )
    }
  </Mutation>
);

export default CartDropdownContainer;
