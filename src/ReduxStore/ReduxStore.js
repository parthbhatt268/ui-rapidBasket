import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './Reducers';

const initialState = {}

const middleware = [thunk];

const composeEnhancers = compose;
const store = createStore(rootReducer, initialState,composeEnhancers(
    applyMiddleware(...middleware),
));

export default store;