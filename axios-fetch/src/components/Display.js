import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios'

function Display() {

    const[todo,setTodo] = useState([]);

    useEffect(()=>{
        fetchData();

    },[]);

    const fetchData = async () =>{
        const data = await axios.get('http://localhost:3001/todos');
        console.log(data.data)
        setTodo(data.data)
    }
    return (
        <div>
            {
                todo.map(data1=>{
                    return <div key={data1.id}>
                    <h2>{data1.name}</h2>
                    </div>
                })
            }
            
        </div>
    )
}

export default Display
