import React, {Component} from 'react'
import Navigation from './navigation'
import Main from './main'

export default class App extends Component {
    constructor(props){
        super(props)
        this.state = {wwwroot: props.wwwroot}
    }
    render() {
        return (
            <div>
                <Navigation wwwroot={this.state.wwwroot} />
                <Main wwwroot={this.state.wwwroot} />
            </div>
        )
    }
}