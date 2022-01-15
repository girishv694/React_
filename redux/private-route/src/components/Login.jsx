import React from 'react'
import Navbar from './Navbar';

function Login() {
    return (
        <div>
            <Navbar/>
           <input type="text" placeholder="username"/>
           <input type="password" placeholder="password"/>

          <input type="submit" value="submit" />
        </div>
    )
}

export default Login
