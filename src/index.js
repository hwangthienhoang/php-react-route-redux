import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
// import store from 'store'
import {BrowserRouter} from 'react-router-dom';
import App from './components/app';

import * as constants from './constants';


ReactDOM.render(
    <BrowserRouter>
        <App wwwroot={constants.WWWROOT} />
    </BrowserRouter>,
    document.getElementById('root')
)