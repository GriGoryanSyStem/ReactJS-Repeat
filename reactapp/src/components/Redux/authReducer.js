let initialState = {
    infoLogin:{
        id: null,
        login: null,
        email: null,
    }
};

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
export default auth;