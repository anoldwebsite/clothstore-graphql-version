import {
  CollectionItemsContainer,
  CollectionPageContainer,
  CollectionTitle
} from './collection.styles';
import React from "react";
import { selectCollection } from "../../redux/shop/shop.selectors";
import { connect } from "react-redux";
import CollectionItem from '../../components/collection-item/collection-item.component';

const CollectionPage = ({ collection }) => {
  const {titel, items} = collection; //destructuring. Is null when app mounsts, and we show spinner until our app fetches data from Firebase.
  return (
    <CollectionPageContainer>
      <CollectionTitle>{titel}</CollectionTitle>
      <CollectionItemsContainer>
        {//items is an array here that we map over. This array has list of items inside e.g., list of hats, list of jackets, etc.
          items.map(item => 
            <CollectionItem key={item.id} item={item} />
          )
        }
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};
/*
The second argument, which is optional, is the props of our component
 that we are going to wrap in a wrapper. The first argument is the state
  from our root reducer from the top level. So, we get ownProps from the
  component CollectionPage above.
*/
const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});
/* 
selectCollection, imported in this module, returns a function and we pass state
to the function returned by call to selectCollection
so that we can get a slice of the state depending on the URL parameter dynamically. 
The match object is passed to CollectionPage by Route component as 
CollectionPage is embedded inside Route component.

We pull the params object from the match objecct and from the params object,
we pull the collectionId e.g., hat or sneakers etc.
*/
export default connect(mapStateToProps)(CollectionPage); //Now we have access to collection in the object CollectionPage
