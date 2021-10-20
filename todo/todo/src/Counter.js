import React from 'react'
const {useState} =React;

function Counter() {

    const [Count,setCount] = useState(0);

    return (
        <div>
            <div className="wrapper">
            <h1 className="count">{Count}</h1>
            

                <button onClick={()=>setCount(Count-1)}>-</button>
                <button onClick={()=>setCount(Count+1)}>+</button>
                <button onClick={()=>setCount(Count*2)}>Double</button>
                <button onClick={()=>setCount(0)}>Reset</button>
            </div>
            
        </div>
    )
}

export default Counter
