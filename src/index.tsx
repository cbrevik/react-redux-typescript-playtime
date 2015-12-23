import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './containers/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';

let initialState = {
    counters: [] = [
        { id: 1, amount: 0, color: 'red', increment: 1 },
        { id: 2, amount: 0, color: 'blue', increment: 5 }
    ]
}

ReactDOM.render(
    <Provider store={createStore(rootReducer, initialState)}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
