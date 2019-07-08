import {CHANGE_NAME} from './actions';

const initialState = {
    firstName: "Eliza",
    lastName: "Mills"
};

export default (state = initialState, action) => {

    if ( action.type === CHANGE_NAME){

        state = {
            firstName : action.firstName,
            lastName : action.lastName
        }
        /*
        return Object.assign({}, state, {
            firstName : action.firstName,
            lastName : action.lastName
        }) */
    }

    return state;

};
