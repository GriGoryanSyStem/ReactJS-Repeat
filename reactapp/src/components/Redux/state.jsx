import React from "react";

let state = {
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
    }
};
export let addPost = () => {
    let newPost = {
        id: 6,
        massage: state.profilePage.textTextArea,
        likes: 5
    };
    state.profilePage.postData.push(newPost);
};
export let updateTextTextArea = (newText) => {
    state.profilePage.textTextArea = newText;
};

export default state;