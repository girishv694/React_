import React from 'react'
import Navbar from './Navbar';
import {Link,Route} from 'react-router-dom'

function Dashboard() {
    const auth = false;
    return (
        <div>
            <Navbar/>
           { auth ?<Link to="/Dashboard"/> : <Link to="/login"/>}
            Dashboard
            
        </div>
    )
}

export default Dashboard
