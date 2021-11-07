import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios'
import './Display.css'
import {Link} from 'react-router-dom'


function Display() {

    const[todo,setTodo] = useState([]);

    useEffect(()=>{
        fetchData();

    },[]);

    const fetchData = async () =>{
        const data = await axios.get('http://localhost:3001/todos');
        
        setTodo(data.data)
    }

    const deleteTask = async id =>{
        await axios.delete(`http://localhost:3001/todos/${id}`);
        fetchData();

    }

   
    return (
        <div>
            {
                todo.map(data1=>{
                    return <div className="display" key={data1.id}>
                    <h2>{data1.name}</h2>
                    <Link className="btn" onClick={()=> deleteTask(data1.id)}>Delete</Link>
                   <Link to ={`/edit/${data1.id}`}>edit </Link>
                    </div>
                    
                    
                })
                
            }
            
        </div>
    )
}

export default Display
