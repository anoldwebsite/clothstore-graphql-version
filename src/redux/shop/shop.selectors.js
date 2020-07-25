import { createSelector } from 'reselect';

const selectShop = state => state.shop;//Get shop from state.

//Get collections from shop
export const selectCollections = createSelector(
    [selectShop],
    (shop) => shop.collections
);
export const selectCollection = collectionUrlParam => createSelector(
    [selectCollections],//this gives us collections. check for null value
    (collections) => collections
        ? collections[collectionUrlParam] //If not null return collection e.g. shop/hats
        : null //Return null in case collections is null
);//selectCollection returns a function

export const selectCollectionsForPreview = createSelector(
    [selectCollections],//We have to check the collections which we get for null case
    collections => collections
        ? Object.keys(collections).map(key => collections[key])
        : []//In case of null return an empty array
);

export const selectIsCollectionFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections //If collections is null then we get false
);