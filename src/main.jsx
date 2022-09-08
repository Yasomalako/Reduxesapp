import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {creatStor,compose} from 'redux'
import {Provider} from 'react-redux'
import usersReducer from './store/reducers/users-reducer'

const enhancers = compose(
  window._REDUX_DEVTOOLS_EXTENSION_&&
  window._REDUX_DEVTOOLS_EXTENSION_()
);
const usersArrayStor = creatStor(usersReducer,{Users:{usersArray:[]}},enhancers)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={usersArrayStor}>
    <App />
  </Provider>
)
