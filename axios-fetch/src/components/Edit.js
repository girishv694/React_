import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios'
import {useHistory,useParams} from 'react-router-dom'

function Edit() {
    let history = useHistory();
    const {id} = useParams();
  
    const [todo,settodo] = useState({
        name:""
    });

    const {name} = todo;

    const oninputchange = e =>{
        settodo({
            ...todo,[e.target.name]:e.target.value
        })

    }




    const loadTask = async() =>{
        const result = await axios.get(`http://localhost:3001/todos/${id}`)
        settodo(result.data)
    }

    useEffect(()=>{
        loadTask();
    },[])


    const onsubmit =async (e) =>{
        e.preventDefault();
        await axios.put(`http://localhost:3001/todos/${id}`,todo);
        history.push('/')
        
    }

    
    return (
        <div>
          <form onSubmit={e=>onsubmit(e)}>
              
              <input type="text" placeholder="name" name = "name" value={name} onChange={e=>oninputchange(e)}/><br/><br/>
              
              <button>Update Todo</button>

          </form>
        </div>
    )
}

export default Edit
