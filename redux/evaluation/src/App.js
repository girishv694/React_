
import './App.css';
import Navbar from './components/Navbar'
import {Route, Switch} from 'react-router-dom'
import About from './components/About';
import Contact from './components/Contact'
import NewShows from './components/NewShows'
import Dashboard from './components/Dashboard'
import Login from './components/Login';
import Book from './components/Book'
function App() {
  return (
    <div className="App">
     
     <Navbar/>
      <Switch>
     <Route exact path="/about">
       <About/>
      </Route>


      <Route exact path ="/book">
        <Book/>
      </Route>


      <Route exact path="/contact">
       <Contact/>
      </Route>

      <Route exact path="/newshows">
      <NewShows/>
      </Route>

      <Route exact path="/Login">
      <Login/>
      </Route>
      <div className="da">
      <Route exact path ="/Dashboard">
        <Dashboard/>
      </Route>
      </div>

      


     </Switch>

    </div>
  );
}

export default App;
