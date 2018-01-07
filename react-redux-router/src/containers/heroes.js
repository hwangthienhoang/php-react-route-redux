import React, { Component } from 'react'
import { connect } from 'react-redux'

class Heroes extends Component {
    renderHeroes(hero) {
        return (
            <li key={hero.id}>
                {`ID: ${hero.id} - Name: ${hero.name} - Class: ${hero.class}`}
            </li>
        )
    }

    render() {
        return (
            <ul>
                {this.props.heroes.map(this.renderHeroes)}
            </ul>
        )
    }
}

function mapStateToProps({ heroes }) {
    return { heroes }
}

export default connect(mapStateToProps)(Heroes)