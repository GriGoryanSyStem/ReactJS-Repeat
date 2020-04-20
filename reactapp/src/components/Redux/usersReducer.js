let initialState = {
    usersData: [
        // {
        //     name: "Person",
        //     id: 0,
        //     photos: {
        //         small: null,
        //         large: null
        //     },
        //     status: null,
        //     followed: null
        // }
    ],
    pageSize: 20,
    totalUsersCount: null,
    currentPage: 1,
    isLoading: null,
};

export const followAC = (isFollowed, userId) => ({
    type: "FOLLOWED", userId: userId, isFollowed: isFollowed
});
export const setUsersAC = (apiResponseResult, apiTotalUsersCount) => ({
    type: "SET_USERS", users: apiResponseResult, total: apiTotalUsersCount
});
export const clickPageAC = (page) => ({
    type: "SELECTED_PAGE", page: page,
});
export const isLoadingAC = (val) => ({
    type: "IS_LOADING",
    isLoading: val,
});

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FOLLOWED":
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
        case "SET_USERS":
            return {
                ...state,
                usersData: action.users,
                totalUsersCount: action.total,
            };
        case "SELECTED_PAGE":
            return {
                ...state,
                currentPage: action.page,
            };
        case "IS_LOADING":
            return {
                ...state,
                isLoading: action.isLoading,
            };
        default:
            return state;
    }
};
export default usersReducer;