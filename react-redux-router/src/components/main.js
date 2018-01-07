import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './home'
import Heroes from '../containers/heroes'
import About from './about'
import Contact from './contact'

export default (props) => (
    <Switch>
        <Route exact path={props.wwwroot+'/'} component={Home} />
        <Route exact path={props.wwwroot+'/heroes'} component={Heroes} />
        <Route exact path={props.wwwroot+'/about'} component={About} />
        <Route exact path={props.wwwroot+'/contact'} component={Contact} />
    </Switch>
)