import React from 'react'
import {NavLink} from 'react-router-dom'

import './NavLinks.css'

function NavLinks(props){
    return (
        <ul className="nav-links">
            <li>
                <NavLink to="/" onClick={props.onClick} exact>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/auth" onClick={props.onClick}>
                    Login
                </NavLink>
            </li>
            <li>
                <NavLink to="/Cart" onClick={props.onClick}>
                    Cart
                </NavLink>
            </li>
        </ul>
    )
}

export default NavLinks