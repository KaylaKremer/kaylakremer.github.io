import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import App from 'App';
import contactReducer from 'store/reducers/contact';
import 'utils/fontAwesome';
import 'normalize-scss';

const reducer = combineReducers({
    contact: contactReducer
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

const app = (
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
