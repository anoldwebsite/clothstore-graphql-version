import ShopActionTypes from './shop.types';

const INITIAL_STATE = {
    collections: null,
    isFetching: false, //This boolean flag will indicate if data is being fetched or not
    errorMessage: undefined //In case of failure, when collections could not be fetched.
};

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ShopActionTypes.FETCH_COLLECTIONS_START:
            return {
                ...state,
                isFetching: true
            }
        case ShopActionTypes.FECTCH_COLLECTIONS_SUCCESS:
            return {
                ...state,
                isFetching: false, //Because data has been fetched successfully
                collections: action.payload
            }
        case ShopActionTypes.FECTCH_COLLECTIONS_FAILURE:
            return {
                ...state,
                isFetching: false, //Because data fetch is failed.
                errorMessage: action.payload
            }
        default:
            return state;
    }
};
export default shopReducer;