import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './containers/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';
import configureStore from './store/configureStore';

const initialState = {
    counters: [] = [
        { id: 1, amount: 0, color: 'red', increment: 1 },
        { id: 2, amount: 0, color: 'blue', increment: 5 }
    ]
}

const store = configureStore(initialState);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
