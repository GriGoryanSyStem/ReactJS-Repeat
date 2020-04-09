const dialogReducer = (state, action) => {
    switch (action.type) {
        case "ADD_NEW_MASSAGE_TEXT":
            state.newMessageTextArea = action.massage;
            return state;
        case "SEND_MASSAGE":
            state.massagesData.push({
                id: 4,
                massage: state.newMessageTextArea,
            });
            state.newMessageTextArea = '';
            return state;
        default:
            return state;
    }
};
export default dialogReducer;