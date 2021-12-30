import './App.css';
import axios from 'axios'
import {useState} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import Search from './Search';
import Details from './Details';


function App() {
  return (
    <div>
<Router>
        <Switch>
          

          <Route path="/Details">
           <Details/>
          </Route>

          <Route path ="/">
            <Search/>
          </Route>
        </Switch>
        </Router>

    </div>
  )
  
}

export default App;
