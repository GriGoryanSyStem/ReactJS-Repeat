import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from "./components/Redux/redux-store";
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux';

ReactDOM.render(
    // <React.StrictMode> UNSAFE_componentWillMount old method dont use
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>
    // </React.StrictMode>
    ,
    document.getElementById('root')
);

serviceWorker.unregister();
