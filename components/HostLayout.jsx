import React from "react";
import { Outlet, NavLink } from 'react-router-dom'

export default function HostLayout() {
    const activeStyle = {
        fontWeight: 'bold',
        textDecoration: 'underline',
        color: '#161616'
    }

    function activeLink(isActive) {
        return isActive ? activeStyle : null
    }

    return (
        <>
            <nav className="host-nav">
                <NavLink to="/host" end style={({isActive}) => activeLink(isActive)}>Dashboard</NavLink>
                <NavLink to="/host/income" style={({isActive}) => activeLink(isActive)}>Income</NavLink>
                <NavLink to="/host/vans" style={({isActive}) => activeLink(isActive)}>Vans</NavLink>
                <NavLink to="/host/reviews" style={({isActive}) => activeLink(isActive)}>Review</NavLink>
            </nav>
            <Outlet />
        </>
    )
}