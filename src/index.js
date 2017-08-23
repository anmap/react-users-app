import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './stylesheets/main.scss';

import App from './components/App';
import { reducers } from './reducers/index'

// Build the users list
let users =  [];
for (let i=1; i<10; i++) {
    users.push({
        id: i,
        username: `John ${i}`,
        job: `Employee ${i}`
    });
}

const initial_state = { users };

// Create the store
const store = createStore(reducers, initial_state);

// Render the main component
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app')
);