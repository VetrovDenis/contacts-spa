import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore, compose } from 'redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import thunkMiddleware from 'redux-thunk'

import rootReducer from './reducers/index'
import loggerMiddleware from './middleware/logger'
import './index.css';
import { initializeContactData } from "./reducers/manage-contact"
//components
import App from './components/main/main'
import ContactEdit from './components/contact-edit/contact-edit'

const initialState = {
}

const middlewareEnhancer = applyMiddleware(loggerMiddleware, thunkMiddleware)
const composedEnhancers = compose(
    middlewareEnhancer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const store = createStore(rootReducer, initialState, composedEnhancers)

store.dispatch(initializeContactData());

render(
    <Provider store={store}>
        <Router>
            <Route path="/" exact component={App} />
            <Route path="/contact-edit" component={ContactEdit} />
        </Router>
    </Provider>,
    document.getElementById('root')
)