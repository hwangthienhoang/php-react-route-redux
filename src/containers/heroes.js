import React, { Component } from 'react'
import * as heroApi from '../api/hero-api'
import { connect } from 'react-redux'

class Heroes extends Component {
    renderHeroes(hero) {
        return (
            <li key={hero.id}>
                {`ID: ${hero.id} - Name: ${hero.name} - Class: ${hero.class}`}
            </li>
        )
    }
    componentDidMount(){
        heroApi.getAll()
    }
    render() {
        return (
            <ul>
                {this.props.heroes.map(this.renderHeroes)}
            </ul>
        )
    }
}

function mapStateToProps({ heroes }) { console.log(heroes)
    return { heroes }
}

export default connect(mapStateToProps)(Heroes)