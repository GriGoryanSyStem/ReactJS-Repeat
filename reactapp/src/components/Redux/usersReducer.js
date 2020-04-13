import img from "../../pictures/personUser.png";
let initialState = {
    usersData: [
        {
            id: 1,
            userImg:img,
            followed: null,
            name: 'David',
            status: 'status number 1',
            location: {
                country: 'Russia',
                city: 'Moscow',
            }
        },
        {
            id: 2,
            userImg:img,
            followed: null,
            name: 'Alex',
            status: 'status number 2',
            country: 'Armenia',
            city: 'Yerevan',
        },
        {
            id: 3,
            userImg:img,
            followed: null,
            name: 'Black',
            status: 'status number 3',
            country: 'France',
            city: 'Paris',
        },
    ],
};
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FOLLOWED":
            return {
                ...state,
                usersData: [...state.usersData].map((i) => {
                    if (i.id === action.userId) {
                        return {...i, followed:action.isFollowed}
                    }
                    else{
                        return i;
                    }
                })
            };
        default:
            return state;
    }
};
export default usersReducer;