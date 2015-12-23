import { Reducer } from 'redux';
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../actions/counter'
import { combineReducers } from 'redux'

const counter : Reducer = (state = 0, action) => {
    switch (action.type) 
    {
        case INCREMENT_COUNTER:
            if (state.id !== action.id) 
                return state;
            return Object.assign({}, state, {
                amount: state.amount + action.increment
            });
        case DECREMENT_COUNTER:
            if (state.id !== action.id) 
                return state;
            
            return Object.assign({}, state, {
                amount: state.amount + action.decrement
            });
        default:
            return state;
    }
}

const counters : Reducer = (state = [], action) => {
    switch (action.type) 
    {
        case INCREMENT_COUNTER:
            return state.map(c => counter(c, action));
        case DECREMENT_COUNTER:
            return state.map(c => counter(c, action));
        default:
            return state;
    }
}

const rootReducer : Reducer = combineReducers({
  counters
});

export default rootReducer;