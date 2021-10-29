
import './App.css';
import Navbar from './Navbar';

function App() {
  return (
    <div className="main">
    <div className="App">
      <div className="logo">
     <Navbar url="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/v1412481844/a7mbyhfnx5zda5jl1hbj.png"/>
     </div>
     <div className="sub">
       <Navbar name = "Try Vedas" classs="vedas"/>
       <Navbar name = "Learn"/>
       <Navbar name = "Resources"/>
       <Navbar name = "About"/>
     </div>
    </div>
    </div>
  );
}

export default App;
