import React from 'react'
import {useEffect,useState} from 'react'
import axios from 'axios'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
    Link
  } from "react-router-dom";

function Details() {

    const[ind,setind] = useState("");
    const[cap,setcap] = useState("");
    useEffect (()=>{
    fetchData();
    },[])

    const fetchData =async () =>{
        let nae = localStorage.getItem("name");
        const response = await axios.get(`https://restcountries.com/v2/name/${nae}`)
        setind(response.data[0].name)
        setcap(response.data[0].capital)
        
    }
    return (
        <div>
           Country Name : {ind} <br/>
           Capital city : {cap}<br/>
           <Link to ="/">Click here to go back</Link>
        </div>
    )
}

export default Details
