import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GlobalStore, GlobalStoreContext } from './service/store';
import { ToastContainer } from 'react-toastify';
import './asset/stylesheet/index.scss';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStoreContext.Provider value={new GlobalStore()}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GlobalStoreContext.Provider>
    <ToastContainer />
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals(console.log);
