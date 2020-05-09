import {stopSubmit} from "redux-form";
import {authAPI} from "../../api/api";

let initialState = {
    infoLogin: {
        id: null,
        login: null,
        email: null,
    },
    isAuth: false
};

export const setLoginAuthAC = (id, login, email, isAuth) => ({
    type: 'SET_LOGIN_AUTH',
    payload: {id: id, login: login, email: email},
    isAuth: isAuth
});

const auth = (state = initialState, action) => {
    if (action.type === "SET_LOGIN_AUTH") {
        return {
            ...state,
            infoLogin: {...action.payload},
            isAuth: action.isAuth
        };
    } else {
        return state;
    }
};

export const authMeThunk = () => async (dispatch) => {
    let data = await authAPI.authMeApi()
    if (data.resultCode === 0) {
        let {id, login, email} = {...data.data};
        dispatch(setLoginAuthAC(id, login, email, true));
    }
};
export const loginThunk = (email, password, rememberMe) => async (dispatch) => {
    let data = await authAPI.loginApi(email, password, rememberMe);
    if (data.resultCode === 0) {
        dispatch(authMeThunk());
    } else {
        dispatch(stopSubmit('login', {_error: data.messages.length > 0 ? data.messages[0] : 'Some is Wrong'}));
    }
};
export const logOutThunk = () => async (dispatch) => {
    let data = await authAPI.logOutApi()
    if (data.resultCode === 0) {
        dispatch(setLoginAuthAC(null, null, null, false));
    }
};

export default auth;