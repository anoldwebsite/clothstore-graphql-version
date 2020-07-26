import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

import CollectionsOverview from "./collections-overview.component";
import Spinner from "../spinner/spinner.component";

const GET_COLLECTION = gql`
  {
    collections {
      id
      title
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`; //Using backticks
//Now we will make a new component that will be equal
//to a functional component that will return our Query component
const CollectionsOverviewContainer = () => (
  //This functional component will return a Query component.
  <Query query={GET_COLLECTION}>
    {
      //This query when executed on the GraphpQL server will give us back a function
      //On that function there is an object that holds a lot of properties
      //We will destructure some properties error, data and loading  peroperties only
      ({ loading, error, data }) => {
        //Let's do console.log to see
        console.log("****************************");
        console.log({ loading });
        console.log({ error });
        console.log({ data });
        console.log("****************************");
        if (loading) return <Spinner />;
        if (error) return <p>ERROR: {error.message}</p>;
        return <CollectionsOverview collections={data.collections} />;
      }
    }
  </Query>
);

export default CollectionsOverviewContainer;
//We will import this component in shop.component.jsx