import React from 'react';
import ReactDOM from 'react-dom';

import {createStore, combineReducers} from 'redux'
import {Provider    } from 'react-redux'

import reducer from './store/reducer'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import counterReducer from './store/reducers/recounter'
import resultReducer from './store/reducers/redresult'
// Yhdistetääs reduserrit
const mainReducer = combineReducers({
    c_red: counterReducer, 
    r_red: resultReducer  
});


// AINA reduceri parametri
const varasto = createStore(mainReducer); 


ReactDOM.render(<Provider store={varasto}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
