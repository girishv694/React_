import './App.css';
import {useState} from 'react'
import axios from 'axios'

function App() {

  const[message,setmessage] = useState("")

  const[user,setUser] = useState({
    firstname : '',
    lastname : '',
    dob:''
  });

  const {firstname,lastname,dob} =user; 
  const inputchange = (e)=>{
    setUser({
      ...user,
      [e.target.name] : e.target.value,
    })
  }

  const submit= async (e)=>{
    e.preventDefault();
   try {
      const response = await axios.post("http://localhost:3001/users",user);
      setmessage("Registered successfully");
       }catch(e){
        setmessage("Something Wrong");
       }

    
  //   if(!response){
  //     setmessage("Something Wrong");
  //   }
  //   else
  //  setmessage("Registered successfully");
    

  }
  return (
    <div className="App">
      
      <div className="data">
      <h1>User Registration</h1>
      <form onSubmit={submit}> 
        <input type="text" placeholder="firstname" name="firstname" value={firstname} 
        onChange={(e)=>inputchange(e)}/><br/><br/>

        <input type="text" placeholder="lastname" name="lastname" value={lastname}
        onChange={(e)=>inputchange(e)} /><br/><br/>


        <input type="text" placeholder="dob" name="dob" value={dob} 
        onChange={(e)=>inputchange(e)}/><br/><br/>
        <input type="submit" id="submit" value="Register user"/>
      </form>
      <p className="msg">{message}</p>

      </div>
      

     
     
    </div>
  );
}

export default App;
