import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";

let store = {
    _state: {
        profilePage: {
            postData: [
                {id: 1, massage: 'First massage', likes: 7},
                {id: 2, massage: 'Hi, how are you', likes: 5},
                {id: 3, massage: 'My name is Props', likes: 21},
            ],
            textTextArea: ''
        },
        dialogPage: {
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
        },
    },
    getState() {
        return this._state;
    },

    dispatch(action) {
        profileReducer(this._state.profilePage,action);
        dialogReducer(this._state.dialogPage,action);
    }
};

/*refactori jamanak sax AC tarel em amen meky iranc fali vra , avel cod er*/

window.store = store;
export default store;