import React from 'react';
import {useState} from 'react'
import './App.css';


function App() {
  const[data,setData] = useState("");
  const[result,setresult] = useState("");
  const [kbres,setkbres] = useState("")

  // const inputhandle = (e) =>{
  //   setData(e.target.value);

  // }

  const convert = (data1) =>{
    let ress = data/1024;
    let resul = ress.toFixed(3);
    setresult(resul);
    return resul;
  }


  const convertTo = (data1) =>{
    let ress = data*1024;
    let resul = ress.toFixed(3);
    setkbres(resul);
    return resul;
  }

  return (
    <div className="App">
    <h1>KB to MB</h1>
    <input type="text" placeholder="KB" onChange={(e)=>setData(e.target.value)}/>
    <button onClick={convert}>Convert to MB</button><br/>
    {/* {data} */}
    {result}MB
    <hr/>

    <h1>MB to KB</h1>
    <input type="text" placeholder="MB" onChange={(e)=>setData(e.target.value)}/>
    <button onClick={convertTo}>Convert to KB</button><br/>
    {kbres}KB
      
    </div>
  );
}

export default App;
