let store = {
    _state: {
        profilePage: {
            postData: [
                {id: 1, massage: 'First massage', likes: 7},
                {id: 2, massage: 'Hi, how are you', likes: 5},
                {id: 3, massage: 'My name is Props', likes: 21},
            ],
            textTextArea: 'write new post text'
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
            ]
        },
    },
    getState() {
        return this._state;
    },
    addPost() {

    },
    updateTextTextArea() {

    },

    dispatch(action) {
        if (action.type === "ADD-POST") {
            let newPost = {
                id: 6,
                massage: this._state.profilePage.textTextArea,
                likes: 5
            };
            this._state.profilePage.postData.push(newPost);
        } else if (action.type === "UPDATE-NEW-POST-TEXT") {
            this._state.profilePage.textTextArea = action.newText;
        }
    }
};
window.store = store;
export default store;