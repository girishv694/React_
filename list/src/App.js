import React, { Component } from 'react'

//import List from './components/List'
// import Join from './components/Buttons/button1'
// import Login from './components/Buttons/button2'
// import Search  from './components/Buttons/button3'
// import Homes from './components/Buttons/button4'
 import '../src/App.css'
// import Settings from './components/Buttons/button5'
// import Contact from './components/Buttons/button6'
// import Help from './components/Buttons/button7'
// import Download from './components/Buttons/button8'
// import Buttons from './components/Buttons/buttons'
//import Images from './components/images/images'
import Card from './components/card/card'

export class App extends Component {
  render() {
    return (
    <div className="conatainer">
    {/* <List/> */}
    
    {/* <div className="mainn">
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
 
     </div> */}

    {/* <Images/> */}
    <div className="row">
    
    <Card
    title="what it is ? yummy"
    url="https://dynaimage.cdn.cnn.com/cnn/q_auto,w_380,c_fill,g_auto,h_214,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F181127105254-08-50-sweets-travel-donuts.jpg"
    old_price="9.99"
    newPrice="999"
    rupees="$"
    alt="mixed rice dish originating among the Muslims of the Indian subcontinent."
    expDate = "25-10-2022"
    cal ="25"/>



    
<Card
    title="what it is ? yummy"
    url="https://img.taste.com.au/GfH1rfX9/w720-h480-cfill-q80/taste/2018/11/dessert-platter-144036-1.jpg"
    old_price="9.99"
    newPrice="999"
    rupees="$"
    alt="mixed rice dish originating among the Muslims of the Indian subcontinent."
    expDate = "25/10/22"
    cal ="265"
    temp="53.8"/>



    
<Card
    title="what it is ?"
    url="https://img.taste.com.au/GfH1rfX9/w720-h480-cfill-q80/taste/2018/11/dessert-platter-144036-1.jpg"
    old_price="9.99"
    newPrice="999"
    rupees="$"
    alt="mixed rice dish originating among the Muslims of the Indian subcontinent."
    expDate = "25-10-2022"
    cal ="25"/>
     </div>
     </div>
    )
  }
}

export default App
