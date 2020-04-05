import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let dialogsData = [
    {id: 1, name: 'Dina'},
    {id: 2, name: 'Maria'},
    {id: 3, name: 'Andrey'},
    {id: 4, name: 'David'},
    {id: 5, name: 'Jon'},
];
let massagesData = [
    {id: 1, massage: 'Hi'},
    {id: 2, massage: 'How are you'},
    {id: 3, massage: 'React'},
];
let postData = [
    {id: 1, massage: 'First massage', likes: 7},
    {id: 2, massage: 'Hi, how are you', likes: 5},
    {id: 3, massage: 'My name is Props', likes: 21},
];

ReactDOM.render(
    <React.StrictMode>
        <App dialogsData={dialogsData} massagesData={massagesData} postData={postData}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
