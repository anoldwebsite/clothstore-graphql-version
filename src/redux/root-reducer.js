/*
This root reducer represents all of the state of our application. 
All of the reducers that we are going to write will go here in this root reducer. We can reset the state of our whole application with this root reducer.Resetting the state is something lots of apps need to do. 
A typical example on when the app state must be reset could be when the user
 logs out. 
*/
//root.reducer.js
import { combineReducers } from 'redux';
import userReducer from './user/user-reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
//In the line above, we are telling redux to use the local storage of our window browser for default storage.
const persistConfig = {
    key: 'root',
    storage, //storage: storage
    whitelist: ['cart'] /* An array of thes string names of all the reducers 
    that we want to persist. At the moment, we have two reducers: one for user
     and one for cart. We are using Firebase authentication to persist our user
      reducer, so we have written just 'cart' inside this array because we 
      want to persist the cart. */
};

const rootReducer =  combineReducers(
    {
        user: userReducer,
        cart: cartReducer,
        directory: directoryReducer,
        shop: shopReducer 
    }
);
//Exporting the modified version of the root-reducer using the function persistReducer imported above.
export default persistReducer(persistConfig, rootReducer);
