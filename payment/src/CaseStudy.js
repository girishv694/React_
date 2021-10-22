import React from 'react'
import './App.css'


function CaseStudy({data,data1,data2,data3,urll}) {
    return (
        <div>
            <div className="data">
            
         <p className="case">{data}</p>
        <h1> {data1}</h1>
        <h1> {data2}</h1>

        </div>

        <div className="bottom_flex">
        <div><p> {data3}</p></div>
        <div><img src={urll}/></div>

       
        
        </div>
        </div>
    )
}

export default CaseStudy
