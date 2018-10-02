import React from 'react';
import ReactDOM from 'react-dom';

import {createStore} from 'redux'
import {Provider    } from 'react-redux'

import reducer from './store/reducer'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// AINA reduceri parametri
const varasto = createStore(reducer); 


ReactDOM.render(<Provider store={varasto}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
