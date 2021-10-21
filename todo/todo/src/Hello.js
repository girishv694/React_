import React from 'react'

function Hello(props) {
    
    return (
        <div>
            {props.itemList.map(item =>{
               return <div className="disp"> <h2>{item}</h2>
            
               </div>
            })}
            
            
        </div>
    )
}

export default Hello
