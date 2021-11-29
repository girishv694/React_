import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
function Navbar() {
    return (
        <div className="navbar">
            <Link to ="/about" className="nav">About</Link>
            <Link to ="/newshows" className="nav">New Shows</Link>
            <Link to ="/contact" className="nav">contact</Link>
            <Link to="/Login" className="nav">Dashboard</Link>
            
        </div>
    )
}

export default Navbar
