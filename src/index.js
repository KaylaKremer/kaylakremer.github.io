import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './App';
import contactReducer from './store/reducers/contact';
import './index.css';

const reducer = combineReducers({
  contact: contactReducer
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

const app = (
  <Provider store={store}>
    <Router basename={process.env.PUBLIC_URL}>
      <App />
    </Router>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
