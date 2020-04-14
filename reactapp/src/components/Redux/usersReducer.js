
let initialState = {
    usersData: [],
};
const usersReducer = (state = initialState, action) => {
    if (action.type === "FOLLOWED") {
        return {
            ...state,
            usersData: [...state.usersData].map((i) => {
                if (i.id === action.userId) {
                    return {...i, followed: action.isFollowed}
                } else {
                    return i
                }
            })
        };
    }
    if (action.type === "SET-USERS") {
        return {
            ...state,
            usersData: action.users,
        };
    }
    else {
        return state;
    }
};
export default usersReducer;