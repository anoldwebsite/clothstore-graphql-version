//This is a "Reducer". Every reducer processes every "Action" even if it doesn't do anything with it.
import { UserActionTypes } from './user.types';
const INITIAL_STATE = {
    currentUser: null
};
//state is the current state that the Redux store will pass to this reducer function whenever an action fires.
//state = someValue means that if state is undefined then the default value for initializing is someValue. This default value could even be null i.e., state = null
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.USER_STATUS_CHANGED:
            return {//return a new object that modifies the supplied/current state with the action supplied as arguments.
                ...state, //Using the spread operator 
                currentUser: action.payload
            };
        default://Always return state even if you didn't change it or even if it is null. You may not return undefined.
            return state; //No modifications are made to the state that we got as argument to this function.
    }
};
export default userReducer;