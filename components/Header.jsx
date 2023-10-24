import React from "react";
import { Link, NavLink} from "react-router-dom";

export default function () {
    const activeStyle = {
        fontWeight: 'bold',
        textDecoration: 'underline',
        color: '#161616'
    }

    function activeLink(isActive) {
        return isActive ? activeStyle : null;
    }

    return (
        <header>
            <Link className="site-logo" to="/">#VanLife</Link>
            <nav>
            <NavLink 
                to="/host"
                style={({isActive}) => activeLink(isActive)}
            >
                Host
            </NavLink>
            <NavLink 
                to="/about"
                style={({isActive}) => activeLink(isActive)}
            >
                About
            </NavLink>
            <NavLink 
                to="/vans"
                style={({isActive}) => activeLink(isActive)}
            >
                Vans
            </NavLink>
            </nav>
        </header>
    )
}