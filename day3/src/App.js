
import './App.css';

import Contact from './components/Contact'
import About from './components/About'
import Service from './components/Service'
import Login from './components/Login'
import {Route} from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
    
      
    <Route path = "/">
          <Navbar/>
        </Route>
        
        <Route exact path = "/about">
          <About/>
        </Route>


        <Route exact path = "/contact">
          <Contact/>
        </Route>


        <Route exact path = "/login">
          <Login/>
        </Route>

        <Route exact path = "/services">
          <Service/>
        </Route>

        


        
     
     
    </div>
  );
}

export default App;
