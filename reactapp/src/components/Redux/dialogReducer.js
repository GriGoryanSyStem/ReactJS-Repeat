let initialState = {
    dialogsData: [
        {id: 1, name: 'Dina'},
        {id: 2, name: 'Maria'},
        {id: 3, name: 'Andrey'},
        {id: 4, name: 'David'},
        {id: 5, name: 'Jon'},
    ],
    massagesData: [
        {id: 1, massage: 'Hi'},
        {id: 2, massage: 'How are you'},
        {id: 3, massage: 'React'},
    ],
    newMessageTextArea: '',
};

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_NEW_MASSAGE_TEXT":
            state.newMessageTextArea = action.massage;
            return {...state};
        case "SEND_MASSAGE":
            state.massagesData.push({
                id: 4,
                massage: {...state.newMessageTextArea},
            });
            state.newMessageTextArea = '';
            return {...state};
        default:
            return state;
    }
};
export default dialogReducer;