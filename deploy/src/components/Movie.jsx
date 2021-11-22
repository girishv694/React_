import React, { useEffect ,useState} from 'react'
import axios from 'axios'
import '../App.css'

function Movie() {

    const[food,setfood] = useState([]);


    const {REACT_APP_BASE_URL}=process.env;
    console.log(process.env)


    async function fetchData(){

const data = await axios.get(REACT_APP_BASE_URL);
setfood(data.data.meals);

console.log(data.data.meals);
    }

    return (
        <div>
<button onClick={fetchData}>click here</button>

<div>
   {food.map(e=>{
       return(
           <div className="main">
               <div className="food">
               <p className="title">{e.strMeal}</p>

           <img src={e.strMealThumb} alt="imag"/>
           </div>
           </div>
       )
   })}
</div>

            
            
        </div>
    )
}

export default Movie
