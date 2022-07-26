import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <BrowserRouter */}
    <Provider store = {store} >
      <HashRouter >
      {/* <BrowserRouter> */}
        <App />
      {/* </BrowserRouter> */}
      </HashRouter>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
