import {usersAPI} from "../../api/api";

let initialState = {
    postData: [
        {id: 1, massage: 'Hi, my first text', likes: 17},
        {id: 2, massage: 'Hi, how are you', likes: 4},
        {id: 3, massage: 'My name is Props', likes: 90},
    ],
    textTextArea: '',
    profile: null,
    status:''
};

const setUserProfileAC = (profile) => ({
    type: 'SET_USER_PROFILE',
    profile: profile
});
const getStatusProfileAC = (textStatus) => ({
    type: 'GET_STATUS_PROFILE',
    status: textStatus
});

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_POST":
            return {
                ...state,
                postData: [...state.postData, {id: 6, massage: state.textTextArea, likes: 5}],
                textTextArea: ""
            };
        case "UPDATE_NEW_POST_TEXT":
            return {
                ...state,
                textTextArea: action.newText
            };
        case "SET_USER_PROFILE":
            return {
                ...state,
                profile: action.profile
            };
            case "GET_STATUS_PROFILE":
            return {
                ...state,
                status: action.status
            };
        default:
            return state;
    }
};

export const profileThunk = (userId) => {
    return (dispatch) => {
        usersAPI.getProfileApi(userId).then(data => {
            dispatch(setUserProfileAC(data))
        });
    }
};
export const statusThunk = (userId) => {
    return (dispatch) => {
        usersAPI.getStatusApi(userId).then(data => {
            dispatch(getStatusProfileAC(data))
        });
    }
};
export const updateStatusThunk = (status) => {
    return (dispatch) => {
        usersAPI.updateStatusApi(status).then(data => {
            if (data.resultCode === 0){
                dispatch(getStatusProfileAC(status))
            }
        });
    }
};

export default profileReducer;