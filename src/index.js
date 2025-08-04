import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import { Provider } from 'react-redux';
import store from './Redux/store';

// import myReducerStore from './Redux/store'

// axios.defaults.baseURL = 'http://localhost:3001';
axios.defaults.baseURL = 'https://db-andres-production-e788.up.railway.app/';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter >
  </Provider>
);
