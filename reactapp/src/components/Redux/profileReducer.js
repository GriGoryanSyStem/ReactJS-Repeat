let initialState = {
    postData: [
        {id: 1, massage: 'Hi, my first text', likes: 17},
        {id: 2, massage: 'Hi, how are you', likes: 4},
        {id: 3, massage: 'My name is Props', likes: 90},
    ],
    textTextArea: ''
};
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_POST":
            return  {
                ...state,
                postData:[...state.postData,{id: 6,massage: state.textTextArea,likes:5}],
                textTextArea:""
            };
        case "UPDATE_NEW_POST_TEXT":
            return {
                ...state,
                textTextArea:action.newText
            };
        default:
            return state;
    }
};
export default profileReducer;