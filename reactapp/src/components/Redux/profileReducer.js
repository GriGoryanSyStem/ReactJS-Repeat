const profileReducer = (state, action) => {
    switch (action.type) {
        case "ADD_POST":
            state.postData.push({
                id: 6,
                massage: state.textTextArea,
                likes: 5
            });
            state.textTextArea = '';
            return state;
        case "UPDATE_NEW_POST_TEXT":
            state.textTextArea = action.newText;
            return state;
        default:
            return state;
    }
};
export default profileReducer;