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
            let copyState = {...state};
            copyState.postData = [...state.postData];
            copyState.postData.push({
                id: 6,
                massage: state.textTextArea,
                likes: 5
            });
            copyState.textTextArea = '';
            return {...copyState};
        case "UPDATE_NEW_POST_TEXT":
            let copyState2 = {...state};
            copyState2.textTextArea = action.newText;
            return {...copyState2};
        default:
            return state;
    }
};
export default profileReducer;