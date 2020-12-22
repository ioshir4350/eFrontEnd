import React from 'react'
import { CSSTransition } from 'react-transition-group'
import NavLinks from './NavLinks';
import './Navbar.css'

function SideDrawer(props){
    console.log(props.show);
    if (props.show){
        return (
            <nav className="drawer-nav">
                <button onClick={props.onClick} style={{float: "right", height: "50px", width: "50px", fontSize: "40px", fontWeight: "lighter"}}>X</button>
                <NavLinks onClick={props.onClick}/>
            </nav>
        )
    }
    else{
        return null
    }
}

export default SideDrawer
