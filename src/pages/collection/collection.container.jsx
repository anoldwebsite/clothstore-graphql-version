import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import Spinner from "../../components/spinner/spinner.component";
import CollectionPage from "./collection.component";

const GET_COLLECTION_BY_TITLE = gql`
    query getCollectionByTitle($title: String!){
        collection(where: {title: $title}){
            id
            title
            items{
                id
                name
                price
                imageUrl
            }
        }
    }
`;

const CollectionPageContainer = ({ match }) => (
    <Query 
        query={GET_COLLECTION_BY_TITLE}
        variables={{ title: match.params.collectionId }}
    >
        {
            ({ loading, data }) => (//We don't need to write return when we have () after =>
                loading 
                ?  <Spinner />
                : <CollectionPage collection={data.collection} />
            )
        }
    </Query>
);

export default CollectionPageContainer;
