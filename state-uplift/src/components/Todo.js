import React from 'react'
import {useState} from 'react'

function Todo() {

    
        const [task,setTask] = useState("john go");
       
        
    
    return (
        <div className="formm">
          
          <div>{task}</div>
           <input type="text"/>
           <button >ADD</button>
            
        </div>
    )
}

export default Todo
