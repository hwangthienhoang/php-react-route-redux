import React from 'react'
import { Link } from 'react-router-dom'

export default (props) => (
    <ul>
        <li><Link to={props.wwwroot+'/'}>Home</Link></li>
        <li><Link to={props.wwwroot+'/heroes'}>List of heroes</Link></li>
        <li><Link to={props.wwwroot+'/about'}>About</Link></li>
        <li><Link to={props.wwwroot+'/contact'}>Contact</Link></li>
    </ul>
)