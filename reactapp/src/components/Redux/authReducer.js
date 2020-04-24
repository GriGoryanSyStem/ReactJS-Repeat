import {usersAPI} from "../../api/api";

let initialState = {
    infoLogin: {
        id: null,
        login: null,
        email: null,
    },
    isAuth:false
};

export const setLoginAuthAC = (id, login, email) => ({
    type: 'SET_LOGIN_AUTH',
    infoLogin: {
        id: id,
        login: login,
        email: email
    },
});

const auth = (state = initialState, action) => {
    if (action.type === "SET_LOGIN_AUTH") {
        return {
            ...state,
            infoLogin:{...action.infoLogin},
            isAuth:true
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