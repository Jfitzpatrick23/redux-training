import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './App'
import reducer from './reducers.js'


const initialState = {
    people: [
        {firstName: 'Margaret', lastName: 'Hamilton', id: '81d6ff6c-10f4-4db0-88f2-1ebf789b7779'},
        {firstName: 'Donald', lastName: 'Knuth', id: 'f515b8de-5916-47db-9fa8-75efe4a5ebb2'}
    ],
    view: 'PersonList',
    selectedPerson: undefined
}

const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render
(
    <Provider store={store} >
        <App/>
    </Provider>,
    document.getElementById('root')
)


