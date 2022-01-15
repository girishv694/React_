import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css'

function Navbar() {
    return (
        <div className="main">
            <Link to = "/home" className="abc">Home</Link>
            <Link to = "/login" className="abc">Login</Link>
            <Link to = "/Dashboard" className="abc">Dashboard</Link>
            <Link to ="/users" className="abc">Users</Link>
            
        </div>
    )
}

export default Navbar
