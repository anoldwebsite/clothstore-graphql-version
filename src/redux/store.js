import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer';
import { persistStore } from 'redux-persist';////This allows our browser to cache our store now depending on some configurations that we will set.
import thunk from 'redux-thunk';

const middlewares = [thunk];//Adding the function logger to the array. We can more later, if we have to.
if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}
export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);
