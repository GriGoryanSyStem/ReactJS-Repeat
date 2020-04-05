import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route,BrowserRouter} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
        <div className="appWrapper">
            <Header/>
            <NavBar/>
            <Route render={()=><Profile/>} path="/profile"/>
            <Route render={()=><Dialogs/>} path="/dialogs"/>
        </div>
        </BrowserRouter>
    );
};
export default App;

//Что делает рендер компонента Route?
// У Route есть 3 props'a которые описывают каким образом выполнить рендер сопоставляя prop path с location.pathname и только один из prop должен быть представлен в Route://
// component — React компонент. Когда роут удовлетворяется сопоставление в path, то он возвращает переданный component (используя функцию React.createElement).
// render — функция которая должна вернуть элемент React. Будет вызвана когда удовлетворится сопоставление в path. Render довольно похож на component, но используется для inline рендеринга и подстановки необходимых для элемента props[5].
// children — в отличие от предыдущих двух props children будет всегда отображаться независимо от того сопоставляется ли path или нет.
