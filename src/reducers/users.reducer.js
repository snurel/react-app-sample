import {FaqActions} from "../models/Faq.model";

const faqReducer = (state = [], action) => {
    switch (action.type) {
        case FaqActions.FETCH:
            return action.payload;
        default:
            return state;
    }
};

export default faqReducer;
