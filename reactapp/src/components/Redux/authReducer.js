import {usersAPI} from "../../api/api";

let initialState = {
    infoLogin: {
        id: null,
        login: null,
        email: null,
    },
    isAuth:false
};

export const setLoginAuthAC = (id, login, email,isAuth) => ({
    type: 'SET_LOGIN_AUTH',
    payload: {id: id,login: login,email: email},
    isAuth:isAuth
});

const auth = (state = initialState, action) => {
    if (action.type === "SET_LOGIN_AUTH") {
        return {
            ...state,
            infoLogin:{...action.payload},
            isAuth:action.isAuth
        };
    } else {
        return state;
    }
};

export const authMeThunk = () => (dispatch) => {
    usersAPI.authMeApi().then(data => {
        if (data.resultCode === 0) {
            let {id, login, email} = {...data.data};
            dispatch(setLoginAuthAC(id, login, email, true));
        }
    });
};
export const loginThunk = (email,password,rememberMe) => (dispatch) => {
    usersAPI.loginApi(email,password,rememberMe).then(data => {
        if (data.resultCode === 0) {
            dispatch(authMeThunk());
        }
    });
};
export const logOutThunk = () => (dispatch) => {
    alert('s')
    usersAPI.logOutApi().then(data => {
        if (data.resultCode === 0) {
            dispatch(setLoginAuthAC(null,null,null,false));
        }
    });
};

export default auth;