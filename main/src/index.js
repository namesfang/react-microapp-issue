import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom'

import microApp from '@micro-zoe/micro-app'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  // </React.StrictMode>
);

microApp.start({
  lifeCycles: {
    created (e, appName) {
      console.log(`${appName}·被创建`)
    },
    beforemount (e, appName) {
      console.log(`${appName}·即将渲染`)
    },
    mounted (e, appName) {
      console.log(`${appName}·已经渲染完成`)
    },
    unmount (e, appName) {
      console.log(`${appName}·已经卸载`)
    },
    error (e, appName) {
      console.log(`${appName}·加载出错`)
    }
  }
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
