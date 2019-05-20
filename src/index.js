import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers/index'
import loggerMiddleware from './middleware/logger'
import './index.css';
import App from './components/App'

const initialState = {

}

const middlewareEnhancer = applyMiddleware(loggerMiddleware, thunkMiddleware)
const composedEnhancers = compose(
    middlewareEnhancer
)

const store = createStore(rootReducer, initialState, composedEnhancers)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)