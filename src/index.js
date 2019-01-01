import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import {store} from './store';
import App from './App';
import * as serviceWorker from './serviceWorker';

console.log("index")
ReactDOM.render(<Provider store = {store}><App /></Provider>, document.getElementById('root'));//englobo la app con el store para que controlar todo el estado de la aplicación y sea global
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
