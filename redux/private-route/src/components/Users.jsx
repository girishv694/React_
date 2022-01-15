import React from 'react'
import Navbar from './Navbar';
import {useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

function Users() {

    const [user,setuser] = useState([]);


    useEffect(()=>{
      fetchData();
    },[])


    const fetchData =async  () => {

        const data = await axios.get("https://reqres.in/api/users");

    
        console.log(data.data.data)
        setuser(data.data.data);

    }
    return (
        <div>
            <Navbar/>
        {
            user.map((users)=>{
                return (
                    <div key={users.id}>
                       <Link to={`/users/${users.id}`}> {users.first_name}</Link>
                     </div>
                )
            })
        }
        </div>
    )
}

export default Users
