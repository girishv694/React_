import {createContext,useState} from 'react'

export const AuthContext = createContext();

export const AuthContextProvider = ({}) =>{
    const[token,setToken] = useState("");

    const handleToken = (newToken) =>{
        setToken(newToken);

    };

    return (
        <AuthContext.Provider value={{token,handleToken}}>
           

        </AuthContext.Provider>
    )
}