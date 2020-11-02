import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import './main.css';
import react_img from './img/react.png';

const App = (props) => {
    return (
        <BrowserRouter>
            <h1>Hello React</h1>
            <img src={react_img}/>
        </BrowserRouter>

    )
}

export default App;