import {useState} from 'react'
import './App.css';

function App() {

  const [data,setData] = useState(0);
  return (
    <div className="App">

      <div data-testid="name">my name </div>

     <div className="value"> {data}</div>
      <button className="btn1"onClick={()=>{setData(data+5)}}>ADD</button>
      <button className="btn2" onClick={()=>{setData(data-5)}}>DECREMENT</button>

      <p className="paragraph">learn react</p>
      <p>Girishv</p>
      john
     
    </div>
  );
}

export default App;
