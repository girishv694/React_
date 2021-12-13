import logo from './logo.svg';
import './App.css';

function App() {

  const calling = () =>{
    console.log("hi there")
  }
  return (
    <div className="App">
     
       
        <input type="text"/>
        <button Onclick={calling}>ADD here</button>
     
    </div>
  );
}

export default App;
