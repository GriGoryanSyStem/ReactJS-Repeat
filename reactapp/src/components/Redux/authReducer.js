import {usersAPI} from "../../api/api";

let initialState = {
    infoLogin: {
        id: null,
        login: null,
        email: null,
    }
};

export const setLoginAuthAC = (id, login, email) => ({
    type: 'SET_LOGIN_AUTH',
    infoLogin: {
        id: id,
        login: login,
        email: email
    }
});

const auth = (state = initialState, action) => {
    if (action.type === "SET_LOGIN_AUTH") {
        return {
            ...state,
            ...action.infoLogin
        };
    } else {
        return state;
    }
};
export const authMeThunk = () => (dispatch) => {
    usersAPI.authMeApi().then(data => {
        if (data.resultCode === 0) {
            let {id, login, email} = {...data.data};
            dispatch(setLoginAuthAC(id, login, email))
        }
    });
};
export default auth;