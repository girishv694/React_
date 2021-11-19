import React from 'react'

import {useState,useEffect} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'



function ProductPer() {
    let { id } = useParams();
    console.log(id)

    const[products,setproducts] = useState({});


    const fetchdata = async() =>{

        const data = await axios.get(`http://localhost:3000/products/${id}`)
        console.log(data.data)
        setproducts(data.data)

    }

    useEffect(()=>{
     fetchdata();
    },[])
    return (
        <div>

            {
               products.name
            }
            
        </div>
    )
}

export default ProductPer
