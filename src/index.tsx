import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'antd/dist/antd.css';
import ServicesApi from './services/servicesAPI';

const api = new ServicesApi(); 
api.getRequestArticles().then(data => console.log(data))



ReactDOM.render(
    <App />,
  document.getElementById('root')
);
