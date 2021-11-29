import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios'
import {useHistory} from 'react-router-dom'

function Book() {
    const history = useHistory();
const [data1,setData1] = useState({});

    useEffect(()=>{
        getData();

    },[])

    const book = () =>{
        alert("Booked")
        history.push('/Dashboard')


    }

    const getData = async () =>{
        const data = await axios.get('http://localhost:3000/movies/1');
        console.log(data.data);
        setData1(data.data);
    }
    return (
        <div>
           {/* <img src = {data1.image}/>
          <p> {data1.title}</p>
          <p> {data1.cast}</p>
           <p>{data1.year}</p>
           <button>Book </button> */}
            <img src = {data1.image}/>
           <p>{data1.title}</p>
           <p>{data1.cast}</p>
           <p>{data1.year}</p>
           <button onClick={book}>book</button>
           
        </div>
    )
}

export default Book
