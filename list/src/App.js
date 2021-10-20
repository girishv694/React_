import React, { Component } from 'react'
//import List from './components/List'
import Join from './components/Buttons/button1'
import Login from './components/Buttons/button2'
import Search  from './components/Buttons/button3'
import Homes from './components/Buttons/button4'
import '../src/App.css'
import Settings from './components/Buttons/button5'
import Contact from './components/Buttons/button6'
import Help from './components/Buttons/button7'
import Download from './components/Buttons/button8'
import Buttons from './components/Buttons/buttons'

export class App extends Component {
  render() {
    return (
     <div className="App">
    {/* <List/> */}
    
    <div className="mainn">
      <div>
      
     <Join/>
     <Login/>
     <Search/>
     <Homes/>
     </div>
     
      <div>
      <Settings/>
     <Contact/>
     <Help/>
     <Download/>
      </div>




      
     
     </div>

     <br/>
     <hr/>
    
     <div className="mainn">
     
     <div>
     <Buttons name="JOIN US" class="join"/>
     <Buttons name="LOGIN" class="login"/>
     <Buttons name="SEARCH" class="search"/>
     <Buttons name="HOME" class="home"/>
     
     </div>
     
      <div>
      <Buttons name="SETTINGS" class="setting"/>
     <Buttons name="CONTACT US" class="contact"/>
     <Buttons name="HELP" class="help"/>
     <Buttons name="DOWNLOAD" class="download"/>
     
      </div>
      <div/>
 
     </div>
     </div>
    )
  }
}

export default App
