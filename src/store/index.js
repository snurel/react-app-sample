import {applyMiddleware, createStore, compose} from "redux";
import thunk from 'redux-thunk';
import reducers from "../reducers";

const initialState = {
    count : 10,
    loginStatus: false,
    users: {
        list: [],
        error: null,
        waiting: false
    }
};

const enhancers = compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(
    reducers,
    initialState,
    enhancers
);

export default store;
