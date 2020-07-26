import {
  CollectionItemsContainer,
  CollectionPageContainer,
  CollectionTitle,
} from "./collection.styles";
import React from "react";
import CollectionItem from "../../components/collection-item/collection-item.component";

const CollectionPage = ({ collection }) => {
  const { titel, items } = collection; //destructuring. Is null when app mounsts, and we show spinner until our app fetches data from Firebase.
  return (
    <CollectionPageContainer>
      <CollectionTitle>{titel}</CollectionTitle>
      <CollectionItemsContainer>
        {
          //items is an array here that we map over. This array has list of items inside e.g., list of hats, list of jackets, etc.
          items.map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))
        }
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};
export default CollectionPage;
