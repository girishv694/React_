import './App.css';
import Home from './components/Home'
import Edit from './components/Edit'

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

        <Route path="/edit/:id">
          <Edit/>
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
