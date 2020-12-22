import React, { useState } from 'react'

import NavLinks from './NavLinks'
import './Navbar.css'
import SideDrawer from './SideDrawer'
import './NavLinks.css'

function NavBar(){

    const [drawerIsOpen, setDrawerIsOpen] = useState(false)

    const open1 = () => {
        setDrawerIsOpen(true)
        console.log(drawerIsOpen);
    }

    const close = () => {
        setDrawerIsOpen(false)
        console.log(drawerIsOpen);
    }
    return(
        <React.Fragment>
        <SideDrawer show={drawerIsOpen} onClick={close} />
        <header>
            <button className="main-navigation__menu-btn" onClick={open1}>
                <span />
                <span />
                <span />
            </button>
        <img src="imgs/logo.png" style={{height:"70px", position:"absolute", left: "5%", top: "5px"}}></img>
        <nav className="navbar">
            <NavLinks />
        </nav>
        </header>
        </React.Fragment>
    )
}

export default NavBar