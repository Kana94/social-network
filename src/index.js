import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postData = [
  {id:1, message:'Hei how are you',likeCount:10},
  {id:2, message:'Hei how are you',likeCount:10}

]
let dialogData = [
  {name: "Kana", id: "1"},
  {name: "Kana2", id: "2"},
  {name: "Kana3", id: "3"},
  {name: "Kana4", id: "4"},
  {name: "Kana5", id: "5"}
];
let messageData = [
  {id:1, message:'Hi'},
  {id:2, message:'Hi2'},
  {id:3, message:'Hi3'},
  {id:4, message:'Hi4'},
  {id:5, message:'Hi5'}
]
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <App postData ={postData} messageData = {messageData} dialogData = {dialogData}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
