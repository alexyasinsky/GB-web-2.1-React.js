import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import {store} from "./store";
import { persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react'
import App from './App';

// import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import { CircularProgress } from '@material-ui/core';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <PersistGate persistor={persistor} loading={<CircularProgress/>}>
    <Provider store={store}>
          <App />
      </Provider>
    </PersistGate>
      
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
