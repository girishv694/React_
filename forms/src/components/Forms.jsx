import React from 'react'
import {useState} from 'react'
import '../App.css'

function Forms() {
    const [formData,setformData] = useState({
        username:"",
        age:"",
        address:"",
        salary:"",
        image:"",
    });

    

    const handlechange = (e) =>{
        const {name , value } = e.target;
       setformData({
           ...formData,
           [name] :value,

       })

    }

    const [records,setRecords] = useState([])

    const handlesubmit = (e) =>{
        e.preventDefault();
        console.log(formData)
        const newRecord = {...formData,id:new Date().getTime().toString()}
        console.log(newRecord)
        setRecords([...records,newRecord])
        console.log(records)

    }
    return (
        <div>
        <div className="container">

            <form onSubmit={handlesubmit}>
                <input type="text" onChange={handlechange} placeholder="Enter name" name="username" id="username"/><br/><br/>
                <input type="text" onChange={handlechange} placeholder="Enter Age" name="age" id="age"/><br/><br/>
                <textarea onChange={handlechange} placeholder="Enter Age" name="address" id="address"/><br/><br/>
                <input type="text" onChange={handlechange} placeholder="Salary" name="salary" id="salary"/><br/><br/>
                <input type="file" onChange={handlechange} placeholder="Salary" name="image" id="image"/><br/><br/>
                <input type="submit"></input>

            </form>
            </div>
            <div>
                {
                    records.map((curr)=>{
                        return (
                            <div className="main">
                            <div className="showd" key={curr.id}>
                               
                               <p> {curr.username}</p>
                               <p> {curr.age}</p>
                               <p>{curr.address}</p>
                               <p>{curr.salary}</p>
                               <p><img src={curr.image}/></p>
                                </div>
                                </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Forms
