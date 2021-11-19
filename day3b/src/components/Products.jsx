import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios'
import '../App.css'

function Products() {

    const[products,setproducts] = useState([]);


    const fetchdata = async() =>{

        const data = await axios.get('http://localhost:3000/products')
        console.log(data.data)
        setproducts(data.data)

    }

    useEffect(()=>{
     fetchdata();
    },[])


    return (
        <div>
            
           {
               products.map(data=>{
                   return(
                    <div key = {data.id}>
                        <div className="Display">
                            
                           <div className="name">{data.name}</div>
                           <div className="idd">{data.id}</div>
                            </div>
                        </div>
                   )
                   
               })
           }
            
        </div>
    )
}

export default Products
