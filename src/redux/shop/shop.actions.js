import ShopActionTypes from './shop.types';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

export const fetchCollectionsStart = () => (
    //This function returns an object and not a function. So, Thunk will not supply it function dispatch.
    {
        type: ShopActionTypes.FETCH_COLLECTIONS_START
    }
);

//Fetch succeeds and we get collections. 
export const fetchCollectionsSuccess = collectionsMap => (
    //This function returns an object and therefore Thunk will not supply it with dispatch.
    {
        type: ShopActionTypes.FECTCH_COLLECTIONS_SUCCESS,
        payload: collectionsMap
    }
);
//The second possible case is that fetch of collections fails.
export const fetchCollectionsFailure = errorMessage => (
    //This function is not retuning funtion.It returns an Action object, so Thunk will not supply it with dispatch.
    {
        type: ShopActionTypes.FECTCH_COLLECTIONS_FAILURE,
        payload: errorMessage
    }
);

/* This is our asynchronous action creator that uses Thunk middlweare which is enabled and 
therefore, any time any function attempts to dispatch a function that returns a function instead of 
returning an object, the middleware Thunk will call that function with dispatch method itself
as the first argument. */
export const fetchCollectionsStartAsync = () => {
    //This function returns a function, so the middleware Thunk will supply it function dispatch.
    //The returning function will use this function dispatch to call action creaters.
    //This is a resuable action now that can be used in any other component that need collections.
    return dispatch => {
        const collectionRef = firestore.collection("collections");
        dispatch(fetchCollectionsStart())

        collectionRef.get()
            .then(
                (snapshot) => {
                    const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
                    dispatch(fetchCollectionsSuccess(collectionsMap));
                }
            ).catch(error =>
                dispatch(fetchCollectionsFailure(error.message))
            )
    }
}