import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'


function Navbar() {
    return (
        <div className="Navbar">
            <Link to="/addTodo" className="link"><h1>Add Todo</h1></Link>
            
        </div>
    )
}

export default Navbar
