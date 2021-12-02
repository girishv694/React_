
import './App.css';
import {useState,useEffect} from 'react'

function App() {

  const [state,setstate] = useState("false");

  useEffect(()=>{
    setTimeout(()=>{
      setstate("true");
    },5000)
  })
  return (
    <div className="App">

      <h1>{state}</h1>
     
    </div>
  );
}

export default App;
