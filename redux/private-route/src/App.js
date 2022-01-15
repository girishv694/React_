
import './App.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import {Switch,Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Users from './components/Users';
import UserDetails from './components/UserDetails';

function App() {
  return (
    <div className="App">
      <Switch>

      <Route exact path ="/">
          <Navbar/>
          </Route>

          <Route exact path ="/users">
          <Users/>
          </Route>

        <Route exact path ="/home">
          <Home/>
          </Route>

          <Route exact path ="/Dashboard">
          <Dashboard/>
        </Route>

        <Route exact path ="/login">
          <Login/>
        </Route>

        <Route exact path ="/users/:id">
          <UserDetails/>
        </Route>

      </Switch>
     
    </div>
  );
}

export default App;
