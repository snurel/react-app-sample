import {CounterType} from "../models/Counter.model";

const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case CounterType.INC:
            return state + 1;
        case CounterType.DEC:
            return state -1;
        default:
            return state;
    }
};

export default counterReducer;
