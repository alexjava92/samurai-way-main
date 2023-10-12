import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from "./components/redux/State";


ReactDOM.render(

    <App   store={store.getState()}/>,

  document.getElementById('root')


);