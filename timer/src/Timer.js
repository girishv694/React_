import React, { useEffect } from 'react'
import {useState} from 'react'
//import {useEffect} from 'react'

function Timer() {

    const [time, settime] = useState(0);
    const [startTimer,setStartTimer] = useState(false);
    const[timerid,setTimerId] = useState(0);
    useEffect(()=>{
        let intervalId = null;
        if(startTimer){
            intervalId = setInterval(()=>{
                settime(prev=>prev+=1);
            },1000);

            setTimerId(intervalId);
        }
        else{
            clearInterval(timerid);
        }

    },[startTimer])
    
    return (
        <div className="container">
        <div className="main">
            <div>{time}</div>
            <button onClick={()=>setStartTimer(true)}>Start</button>
            <button onClick={()=>setStartTimer(false)}>Stop</button>
        </div>
        </div>
    )
}

export default Timer
