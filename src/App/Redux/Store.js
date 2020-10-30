import {
    createStore,
    applyMiddleware
} from 'redux';
// import {persistStore} from 'redux-persist'


import RootReducer from './RootReducer'
import logger from 'redux-logger';

const middlware = [logger];

export const store = createStore(RootReducer, applyMiddleware(...middlware));
