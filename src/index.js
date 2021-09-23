import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogs = [
    { id: 1, name: "Max" },
    { id: 2, name: "John" },
    { id: 3, name: "Mary" },
    { id: 4, name: "Sara" },
  ];
let messages = [
  { id: 1, message: "Hello" },
  { id: 2, message: "How are you?" },
  { id: 3, message: "Nice to meet you))" },
  { id: 4, message: "Great!!" },
];
  

ReactDOM.render(
  <React.StrictMode>
    <App
      posts={[
            {
              message: "Hello,Chief!!",
              likesCount: 2,
              text: "like",
              src: "https://gtavrl.ru/public/poscreenra.jpg",
            },
            {
              message: "How are you?",
              likesCount: 4,
              text: "like",
              src: "https://gtavrl.ru/public/poscreenra.jpg",
            },
            {
              message: "WHAT???",
              likesCount: 3,
              text: "like",
              src: "https://gtavrl.ru/public/poscreenra.jpg",
            },
    ]}
      contantInfo={
            ((<img src="https://wallpaperaccess.com/full/51360.jpg" />),
            (
              <img src="https://thumbs.dreamstime.com/b/%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80-%D0%BC%D0%BE%D0%B4%D0%B0-%D0%B1%D0%BE%D1%81%D1%81-%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%BC%D1%83%D0%B6%D1%81%D0%BA%D0%BE%D0%B9-%D0%BE%D0%B4%D0%B5%D0%B6%D0%B4%D1%8B-%D0%BA%D1%80%D0%B5%D0%B0%D1%82%D0%B8%D0%B2%D0%BD%D1%8B%D0%B9-%D0%B4%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD-%D1%8D%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82%D0%BE%D0%B2-%D0%B8%D0%B7-168197016.jpg" />
            ))
          }
      messages={messages} dialogs={dialogs}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
