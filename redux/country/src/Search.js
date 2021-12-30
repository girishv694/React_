import React from 'react'
import './App.css';
import axios from 'axios'
import {useState} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  Link
} from "react-router-dom";
import Details from './Details';

function Search() {
    let {id} = useParams();
    const[country,setcountry] = useState([]);
 


    const clicked = (e) =>{
        localStorage.setItem("name",e);
     
      console.log(e)
      
  
    }
   
    const fetch =async(e) =>{
  
      const {value} = e.target;
      if(value.length>2){
  
        const response = await axios.get(`https://restcountries.com/v2/name/${value}`)
       console.log(response.data)
       for(let i=0;i<response.data.length;i++){
        console.log(response.data[i].name)
        setcountry(response.data)
       }
  
      }
      
      
    
    }
      
    return (
      <div className="App">
       <h1>Search country</h1>
       <input type="text" className = "input"onChange={(e)=>fetch(e)}/>
       <div className='container'>
  
         
       {
         country.map(elem=>{
           return (
             
             <div key = {elem.code}>
           <Link to = "/Details" data = {elem.name}>  <p className='data' onClick={()=>clicked(elem.name)}>{elem.name}</p> </Link> 
            
               </div>
           )
         })
       }
       </div>
  
  
      
      </div>
    );
  
}

export default Search
