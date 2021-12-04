import {useState} from 'react'
import './App.css';

function App() {

  const [ data,setData] = useState(true);
  return (
    <div className="App">

      <div className="nav">

{data ? <div><button onClick={()=>setData(!true)}>Logout</button> Token is: {Math.random().toString(36).slice(4)}</div>: <button onClick={()=>setData(!false)}>Login</button>}
</div>
    </div>
  );
}

export default App;
