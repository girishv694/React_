import React from 'react'
import {useState} from 'react'
import {addTodo,deleteTodo} from '../actions/index'
import {useDispatch,useSelector} from 'react-redux'

function Todo() {
    const[todo,settodo] = useState('')
    const list = useSelector((state)=>state.reducers.list)
    const dispatch = useDispatch();
    return (
        <div>
            <div>
            <input type="text" onChange={e=>settodo(e.target.value)} value={todo}/>
            <button onClick={()=>dispatch(addTodo(todo),settodo(''))}>Add to do</button>
            </div>

            <div>
               {
                   list.map((elem)=>{
                       return (
                       <div key = {elem.id} className="items">
                           
                           <h3>{elem.data}</h3>
                           <button onClick={()=>dispatch(deleteTodo(elem.id),settodo(''))}>Delete</button>
                       </div>
                       )
                   })
               }

            </div>
           
        </div>
    )
}

export default Todo
