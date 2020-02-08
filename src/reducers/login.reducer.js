import {LoginType} from "../models/Login.model";

const loginReducer = (state = false, action) => {

    switch (action.type) {
        case LoginType.SIGN_IN:
            return true;
        case LoginType.SIGN_OUT:
            return false;
        default:
            return state;
    }
};

export default loginReducer;
