//libraries 
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware} from 'redux'; 
import { Provider } from 'react-redux'; 
import thunk from 'redux-thunk'; 

//redux(helpers)
import { stationsReducer } from './reducers'; 

// components
import App from './App';

// stylesheets
import './index.css';

const store = createStore(stationsReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// DEPENDENCIES:
// react, DOM, createStore, applyMiddleware, Provider, thunk

//COMPONENTS:
// App, reducer