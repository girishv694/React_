import React from 'react'
import {useSelector} from 'react-redux'
import './DisplayTodo.css'
import { useDispatch } from 'react-redux'
import {deleteTodo} from '../actions'

function DisplayTodo() {
    const dispatch = useDispatch();

    const state = useSelector(state => state.todoreducers.list)
    return (
        <div>
            {
                state.map(elem=>{
                    return (
                        <div className="main">
                            <p className="data1">{elem.data}</p>
                        <button className="btn" onClick={()=> dispatch(deleteTodo(elem.id))}>Delete</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default DisplayTodo
