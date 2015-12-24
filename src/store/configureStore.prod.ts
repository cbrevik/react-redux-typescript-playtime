import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/rootReducer';

const finalCreateStore = compose()(createStore);

export default function configureStore(initialState) {
  return finalCreateStore(rootReducer, initialState);
};