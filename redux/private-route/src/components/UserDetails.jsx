import React ,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import Navbar from './Navbar';

function UserDetails() {

    const{id} = useParams();
    // console.log(data)

    const[user,setuser] = useState({})

    useEffect(()=>{
     fetchData();
    },[id])

    const fetchData = async () =>{
        const data1 = await axios.get(`https://reqres.in/api/users/${id}`)
        console.log(data1.data.data)
        setuser(data1.data.data)
    }
    return (
        <div>
           <Navbar/>
            <img src = {user.avatar}/>
           <p> {user.first_name}</p>
           <p> {user.email}</p>
        </div>
    )
}

export default UserDetails
