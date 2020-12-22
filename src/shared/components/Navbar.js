import React from 'react'

import NavLinks from './NavLinks'
import './Navbar.css'

function NavBar(){
    return(
        <header>
            <button>
                <span />
                <span />
                <span />
            </button>
        <nav className="navbar">
            <NavLinks />
        </nav>
        </header>
    )
}

export default NavBar