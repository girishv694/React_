import React from 'react'


function card(props) {
    return (
        <div className="card">
            <div className="wrapper">
                  <img src={props.url} alt="dessert"/>
                 <h1> {props.title}</h1>
                 <div className="desc">{props.alt}</div>
                 <div className="sub_class">
                 <div>{props.cal}</div>
                 <div>P/F/C:{props.expDate}</div>
                 <div>{props.temp}C</div>
                 </div>
                 <div className="subb">
                 <div><h1>${props.old_price}</h1></div>
                 <div><h2>${props.newPrice}</h2></div>

                 
                 <button>Order</button>
                 </div>
          </div>
        </div>
    )
}

export default card
