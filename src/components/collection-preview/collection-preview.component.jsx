import React from "react";
import {
  CollectionPreviewContainer,
  PreviewContainer,
  TitleContainer
} from './collection-preview.styles';

import CollectionItem from "../collection-item/collection-item.component";

export const CollectionsPreview = ({ title, items }) => (
  <CollectionPreviewContainer>
    <TitleContainer>{title.toUpperCase()}</TitleContainer>
    <PreviewContainer>
      {items
        .filter((item, itemIndex) => itemIndex < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </PreviewContainer>
  </CollectionPreviewContainer>
);
export default CollectionsPreview;
