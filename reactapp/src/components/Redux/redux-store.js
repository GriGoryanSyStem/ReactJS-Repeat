import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers({
    profilePageR:profileReducer,
    dialogPageR:dialogReducer,
    usersPageR:usersReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;


