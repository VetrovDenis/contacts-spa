import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers/index'
import loggerMiddleware from './middleware/logger'
import './index.css';
import App from './components/main/main'

const initialState = {
    contacts: [
        {
            id: 1,
            name: "Denis",
            surname: "Vetrov",
            phone_numbers: ["+38099999999"],
            call_history: []
        },
        {
            id: 2,
            name: "Steve",
            surname: "Jobs",
            image_url: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Steve_Jobs_Headshot_2010-CROP.jpg",
            phone_numbers: ["+38099999999"],
            call_history: []
        },
        {
            id: 3,
            name: "Harrison",
            surname: "Ford",
            image_url: "https://static.tvtropes.org/pmwiki/pub/images/harrison_ford_5989.jpg",
            phone_numbers: ["+38099999999"],
            call_history: []
        },
        {
            id: 3,
            name: "Harrison",
            surname: "Ford",
            image_url: "https://static.tvtropes.org/pmwiki/pub/images/harrison_ford_5989.jpg",
            phone_numbers: ["+38099999999"],
            call_history: []
        },
        {
            id: 3,
            name: "Harrison",
            surname: "Ford",
            image_url: "https://static.tvtropes.org/pmwiki/pub/images/harrison_ford_5989.jpg",
            phone_numbers: ["+38099999999"],
            call_history: []
        },
        {
            id: 3,
            name: "Harrison",
            surname: "Ford",
            image_url: "https://static.tvtropes.org/pmwiki/pub/images/harrison_ford_5989.jpg",
            phone_numbers: ["+38099999999"],
            call_history: []
        },
        {
            id: 3,
            name: "Harrison",
            surname: "Ford",
            image_url: "https://static.tvtropes.org/pmwiki/pub/images/harrison_ford_5989.jpg",
            phone_numbers: ["+38099999999"],
            call_history: []
        }
    ]
}

const middlewareEnhancer = applyMiddleware(loggerMiddleware, thunkMiddleware)
const composedEnhancers = compose(
    middlewareEnhancer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const store = createStore(rootReducer, initialState, composedEnhancers)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)