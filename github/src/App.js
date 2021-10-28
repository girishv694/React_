import {useState} from 'react'
import './App.css';
import axios from 'axios';


function App() {
  const [search,setsearch] = useState("");
  const[states,setState] = useState([]);

const handlechange = (e) =>{
setsearch(e.target.value)

}

async function fetchDetails(){
  try{
  const response  = await axios.get(`https://api.github.com/users/${search}`);
  console.log(response.data)
  setState(response.data)
}
catch(err){
  console.log(err)
}
}

  return (
    <div>
    <div className="navbar"><h2>Github Search </h2></div>
    <div className="search">
      <input type="text" onChange={handlechange} placeholder="Enter username"/>
      <button onClick={fetchDetails}>Search</button>
     </div>
     <div className="card">
       
      <img src= {states.avatar_url} alt="" className="imgg"/>
      <p>{states.login}</p>
      <p>{states.public_repos}</p>
      
     </div>
      
   
    </div>
  );
}

export default App;
