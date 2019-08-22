import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import todoReducer from './reducers/todo'
import messageReducer from './reducers/messages'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk),
);

const reducer = combineReducers({
    todo: todoReducer,
    message: messageReducer
})

export default createStore(reducer, enhancer)