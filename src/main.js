import React from 'react';
import ReactDom from 'react-dom';
import App from './App.js';
//import store from './redux/redux-store.js';
import {Provider} from 'react-redux';

ReactDom.render(<App/>, document.querySelector('#app'));