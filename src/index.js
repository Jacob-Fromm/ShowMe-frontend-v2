import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom"
import {Provider} from "react-redux"
import { applyMiddleware, createStore, middleWare } from "redux"
import rootReducer from "./Redux/reducer" 
import thunk from "redux-thunk"
import './Style/index.css';
import App from './App';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(

  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

