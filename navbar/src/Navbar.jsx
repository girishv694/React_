import React from 'react'
import './App.css'

function Navbar({url,name,classs}) {
    return (
        <div>
            <div><img src={url} alt=""/></div>
           <div className={classs}>{name}</div> 
        </div>
    )
}

export default Navbar
