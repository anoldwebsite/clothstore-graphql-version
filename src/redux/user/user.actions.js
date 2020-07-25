//user.actions.js
import { UserActionTypes } from './user.types';
//This is an action creater function that returns an action object.
const ACTION_TYPE = UserActionTypes.USER_STATUS_CHANGED;
export const setCurrentUser = user => (
    {
        //type: 'SET_CURRENT_USER',
        type: ACTION_TYPE,//A better phrase should be like a newstory i.e., soemthing that has already happened e.g., 'USER_STATUS_CHANGED'
        payload: user
    }
);