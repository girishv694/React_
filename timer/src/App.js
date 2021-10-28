
import './App.css';
//import Timer from './Timer'
import Axios from './Axios'
import Centers from './Centers';

function App() {
  return (
    <div className="App">
     {/* <Timer/> */}
     <div className="main">
       <div className="data">
     <Axios/>
     <Centers/>
     </div>
    </div>
    </div>
  );
}

export default App;
