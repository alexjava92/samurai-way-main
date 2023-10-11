import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from "./components/redux/State";


ReactDOM.render(

    <App state={store.getSate()} addPost={store.addPost.bind(store)}/>,

  document.getElementById('root')


);