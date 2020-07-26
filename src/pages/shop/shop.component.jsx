import React from "react";
import { Route } from "react-router-dom";
import {default as CollectionPage} from "../collection/collection.container";
import { default as CollectionsOverview } from "../../components/collections-overview/collections-overview.container";

//We can rename CollectionsOverviewContainer as CollectionsOverview using default because default is actually already alias for us as an export

const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

export default ShopPage;
