import { createStore } from 'redux';
import createRootReducer from '../reducers/index';

export const store = createStore(
    createRootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
