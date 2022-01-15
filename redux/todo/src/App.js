
import './App.css';
import Todo from './components/Todo'
import {useState} from 'react'

function App() {

  const[count,setcounter] = useState(0);

  return (
    <div className="App">
       <button onClick={()=>setcounter(count+1)}>+</button>
            <button onClick={()=>setcounter(count-1)}>-</button>
            {count}
      <Todo/>
      
    </div>
  );
}

export default App;
