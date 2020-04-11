let initialState = {
    postData: [
        {id: 1, massage: 'First massage', likes: 7},
        {id: 2, massage: 'Hi, how are you', likes: 5},
        {id: 3, massage: 'My name is Props', likes: 21},
    ],
    textTextArea: ''
};
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_POST":
            state.postData.push({
                id: 6,
                massage: {...state.textTextArea},
                likes: 5
            });
            state.textTextArea = '';
            return {...state};
        case "UPDATE_NEW_POST_TEXT":
            state.textTextArea = action.newText;
            return {...state};
        default:
            return state;
    }
};
export default profileReducer;