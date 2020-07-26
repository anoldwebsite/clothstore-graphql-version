import { CollectionOverviewContainer } from "./collection-overview.styles";
import React from "react";
import CollectionsPreview from "../collection-preview/collection-preview.component";

const CollectionOverview = ({ collections }) => (
  <CollectionOverviewContainer>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionsPreview key={id} {...otherCollectionProps} />
    ))}
  </CollectionOverviewContainer>
);

export default CollectionOverview;
