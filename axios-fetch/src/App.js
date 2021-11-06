import './App.css';
import Home from './components/Home'

import { BrowserRouter as Router,Switch, Route } from 'react-router-dom'
import Postt from './components/Postt';

function App() {
  return (

    <div className="App">
      <Router>
      <Switch>
        


        <Route path = '/addTodo'>
          <Postt/>
        </Route>

        <Route path="/ad">
          <Postt/>
        </Route>

        <Route path = '/'>
          <Home/>
        </Route>





      </Switch>
      </Router>
      

     
      
      
    </div>
  
  );
}

export default App;
