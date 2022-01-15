import React from 'react'
import axios from 'axios'
import {useEffect,useState} from 'react'
import './Details.css'
import {useParams} from 'react-router-dom'
import {useHistory} from 'react-router-dom'

function Dashboard() {

    const history = useHistory();

let {id} = useParams();
    const complete = (e) => {
        console.log(e);
        history.push('/book')
        

    }

    const [data,setData] = useState([]);

    useEffect(()=>{
      getData();
    },[])

    const getData = async () => {
        const data = await axios.get('http://localhost:3000/movies');
        console.log(data.data);
        setData(data.data);
    }
    return (
        <div>
            <h1>Dashboard</h1>

            <div className="box">
            {
                data.map((e)=>{
                    return(
                        <div key = {e.id} className="details">
                            <div className="data">
                            <div>
                            <img src = {e.image}/>
                            <p>{e.title}</p>
                            <button onClick={complete}>Click to see the details</button>
                            
                            </div>
                            </div>
                        </div>
                    )
                })
            }
            </div>
         
        </div>
    )
}

export default Dashboard
