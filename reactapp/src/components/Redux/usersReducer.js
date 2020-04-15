let initialState = {
    usersData: [
        {
            name: "Person",
            id: 0,
            photos: {
                small: null,
                large: null
            },
            status: null,
            followed: null
        }
    ],
    pageSize:20,
    totalUsersCount:0,
    currentPage:1,
};

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
        case "SET-USERS":
            return {
                ...state,
                usersData: action.users,
                totalUsersCount:action.total,
            };
        case "SELECTED-PAGE":
            return {
                ...state,
                currentPage: action.page,
            };
        default:
            return state;
    }
};
export default usersReducer;