import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css'

function Navbar() {
    return (
        <div className="container">
            <div className="main">
            
            <Link to = "/about" className="fix">About us</Link>
            
            <Link to = "/contact" className="fix">Contact us</Link>
            
            <Link to = "/services" className="fix">Services</Link>
            
            <Link to = "/login" className="fix">Login</Link>
           
            </div>
            
            
        </div>
    )
}

export default Navbar
