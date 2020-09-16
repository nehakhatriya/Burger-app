import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware,compose,combineReducers} from 'redux'
import Burgerreducer from './store/reducer/burgerBuilder-reducer'
import Orderreducer from './store/reducer/order-reducer'
import thunk from 'redux-thunk'


axios.defaults.baseURL="https://reactmyburger-399ae.firebaseio.com/"
const rootReducer=combineReducers({
  burgerBuilder:Burgerreducer,
  order:Orderreducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider> 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
