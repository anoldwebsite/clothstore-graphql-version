import React from 'react';
import  { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import Header from './header.component';

//Since we have this query here and in the file resolvers.js
//We can write it in a separate file and use it in both these files.
//But for the purpose of learning so that we can see it here in the same file, we have it here.
const GET_CART_HIDDEN = gql`
    {
        cartHidden @client
    }
`;

const HeaderContainer = () => (
    <Query query={GET_CART_HIDDEN}>
        {
            //We get data from the query GET_CART_HIDDEN
            //We destructure cartHidden from data
            ({ data: { cartHidden } }) => <Header hidden={cartHidden} />
        }
    </Query>
);

export default HeaderContainer;