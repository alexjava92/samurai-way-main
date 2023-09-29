import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let posts = [
    {id: 1, message: "Hello bro88787", likeCount: 12},
    {id: 2, message: "Все в порядке ", likeCount: 1},
    {id: 3, message: "Denis React ", likeCount: 1},
    {id: 4, message: "Alexey don`t no errorrrrrr", likeCount: 1}
]

ReactDOM.render(

    <App posts={posts}/>,

  document.getElementById('root')


);