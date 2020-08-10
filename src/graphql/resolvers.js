import { gql } from 'apollo-boost';
import { addItemToCart, getCartItemsCount, getCartPriceTotal } from './cart.utils';

export const typeDefs = gql`
    extend type Mutation {
        ToggleCartHidden: Boolean!
        AddItemToCart(item: Item!): [Item]! 
    }

    extend type Item {
        quantity: Int 
    }
`;
//Writing our query for updating data i.e. updating the status of cartHidden which is of type boolean
const GET_CART_HIDDEN = gql`
    {
        cartHidden @client
    }
`;
//Query for getting the existing items in the cart
const GET_CART_ITEMS = gql`
    {
        cartItems @client
    }
`;

//Query for getting the number of items in the cart and the total price.
const GET_CART_INFO = gql`
    {
        itemsCount @client
        itemsTotalPrice @client
    }
`;

//Now, we will write resolvers
export const resolvers = {
    Mutation: {
        toggleCartHidden: (root, args, { cache }) => {
            //We need only cartHidden from the data below
            //so we destructure that
            const { cartHidden } = cache.readQuery(
                {
                    query: GET_CART_HIDDEN
                }
            );
            //Now, that we have value of cartHidden (either true or false ie.hidden or not hidden), we can update its value by toggling it.
            cache.writeQuery(
                {
                    query: GET_CART_HIDDEN,
                    data: {
                        cartHidden: !cartHidden
                    }
                }
            );
            //Sending the updated value to the called of toggleCartHidden
            return !cartHidden;
        },

        addItemToCart: (root, { item }, { cache }) => {
            //Execute the query written above to get items in the cart from the local cache
            const { cartItems } = cache.readQuery(
                {
                    query: GET_CART_ITEMS
                }
            );
            //Adding the new item that the user wants to add
            const newCartItems = addItemToCart(cartItems, item);

            //Write query to the local cache to modify existing data i.e. to update the number of items and the total price
            cache.writeQuery(
                {
                    query: GET_CART_INFO,
                    data: {
                        itemsCount: getCartItemsCount(newCartItems),
                        itemsTotalPrice: getCartPriceTotal(newCartItems)
                    }
                }
            );

            //Write the array of all items including the newly added item to the cache
            cache.writeQuery(
                {
                    query: GET_CART_ITEMS,
                    data: {
                        cartItems: newCartItems
                    }
                }
            );

            //Return the new array of items to the caller of this mutation
            return newCartItems;
        }
    }
}