import React from 'react'
import {useState} from 'react'
import axios from 'axios'
import {useHistory} from 'react-router-dom'

function Postt() {
    let history = useHistory();
    const [todo,settodo] = useState({
        id:"",
        name:""
    });

    const {id,name} = todo;

    const oninputchange = e =>{
        settodo({
            ...todo,[e.target.name]:e.target.value
        })

    }


    const onsubmit =async (e) =>{
        e.preventDefault();
        await axios.post("http://localhost:3001/todos",todo);
        history.push('/')
        
    }
    return (
        <div>
          <form onSubmit={e=>onsubmit(e)}>
              <input type="text" placeholder="id" name = "id" value={id} onChange={e=>oninputchange(e)}/><br/><br/>
              <input type="text" placeholder="name" name = "name" value={name} onChange={e=>oninputchange(e)}/><br/><br/>
              
              <button>Add Todo</button>

          </form>
        </div>
    )
}

export default Postt
