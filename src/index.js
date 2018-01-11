import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import store from './store'
import {BrowserRouter} from 'react-router-dom'
import App from './components/app'

import * as constants from './constants'

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App wwwroot={constants.WWWROOT}/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)