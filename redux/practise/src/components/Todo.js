import React from 'react'
import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../actions'

function Todo() {

    const dispatch = useDispatch();

    const [todo,settodo] = useState('');
    return (
        <div>
            <input type="text" value={todo} onChange={e=>settodo(e.target.value)}/>
            <button  onClick={() => dispatch(addTodo(todo),settodo(''))}>ADD Todo</button>

         
        </div>
    )
}

export default Todo
