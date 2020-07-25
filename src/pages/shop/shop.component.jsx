import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCollectionsStartAsync as unboundImportedFetchFollectionStartAsync} from '../../redux/shop/shop.actions';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';

class ShopPage extends React.Component {

  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();//We call this function to fetch collections from Firebase database, asynchronously after the component ShopPage mounting completes.
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`} // this gives /shop
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`} //e.g. /shop/hats
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(unboundImportedFetchFollectionStartAsync())
});

export default connect(null, mapDispatchToProps)(ShopPage);
