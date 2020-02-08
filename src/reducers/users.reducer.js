import {UserActions} from "../models/Faq.model";

const usersReducer = (state = [], action) => {
    switch (action.type) {
        case UserActions.FETCH:
            return {
                list: action.payload,
                waiting: false,
                error: null
            };
        case UserActions.WAITING:
            return {
                waiting: true,
                error: null
            };
        case UserActions.FAIL:
            return {
                waiting: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default usersReducer;
