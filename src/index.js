import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import myReducerStore from './Redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      {/* <Provider store={ myReducerStore }> */}
        <App />
      {/* </Provider> */}
    </BrowserRouter>
);
