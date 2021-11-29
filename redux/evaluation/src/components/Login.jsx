import React from 'react'
import {useHistory} from 'react-router-dom'

function Login() {

    const history = useHistory();


    const login = () =>{
        alert("login successful");
        history.push('/Dashboard');

    }
    return (
        <div>
            <input type="text" placeholder="username"/>
            <input type="text" placeholder="password"/>
            <button onClick={login}>Login</button>

            
        </div>
    )
}

export default Login
