import React from 'react'
import {NavLink} from 'react-router-dom'

import './NavLinks.css'

function NavLinks(){
    return (
        <ul className="nav-links">
            <li>
                <NavLink to="/">
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/auth">
                    Login
                </NavLink>
            </li>
            <li>
                <NavLink to="/Cart">
                    Cart
                </NavLink>
            </li>
        </ul>
    )
}

export default NavLinks