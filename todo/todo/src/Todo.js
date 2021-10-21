import React from 'react'
import {useState} from 'react'
import List from './Hello'

function Todo() {
    const [task,setTask] = useState(null);
    const [itemList,UpdateItemList] = useState([]);
    const onChangeHandler = e => {
        console.log("current value", e.target.value)
        setTask(e.target.value)
    }

    const addItem = () =>{
        UpdateItemList([...itemList,task]);
        console.log(itemList)
    }
    return (
        <div className="App">

<header className="App-header">
    <div className="wrapper">
        <div className="Input-wrapper">
          
       
      
            <input value={task} onChange={onChangeHandler} placeholder="Enter task"/>

            <button onClick={addItem}>+</button>

         </div>
         <List itemList={itemList}/>
    </div>
</header>

            
        </div>
    )
}

export default Todo
