import { combineReducers } from "redux";
import counterReducer from "./counter.reducer";
import loginReducer from "./login.reducer";
import usersReducer from "./users.reducer";

const reducers = combineReducers({
    count: counterReducer,
    loginStatus: loginReducer,
    users:usersReducer
});

export default reducers;
