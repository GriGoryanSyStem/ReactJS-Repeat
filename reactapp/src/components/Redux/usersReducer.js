import img from "../../pictures/personUser.png";

let initialState = {
    usersData: [
        {
            id: 1,
            userImg: img,
            followed: null,
            name: 'David',
            status: 'status 1',
            location: {
                country: 'Russia',
                city: 'Moscow',
            }
        },
        {
            id: 2,
            userImg: img,
            followed: null,
            name: 'Alex',
            status: 'status 2',
            location: {
                country: 'Armenia',
                city: 'Yerevan',
            }
        },
        {
            id: 3,
            userImg: img,
            followed: null,
            name: 'Black',
            status: 'status 3',
            location: {
                country: 'France',
                city: 'Paris',
            }
        },
    ],
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
    } else {
        return state;
    }
};
export default usersReducer;