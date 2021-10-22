import React from 'react'
import CaseStudy from '../CaseStudy'


function LogoDate({url,date,classs}) {
    return (
        
            <div className={classs}>
            <div className="first">
                <div> <p>{date}</p></div>
            
            <div><img src={url} alt="amazon"/></div>
            </div>

            < div className="second">
              <CaseStudy data="Case Study" data1="Amazon Gift" data2="Pay" data3="Desktop - Mobile"  urll ="https://e7.pngegg.com/pngimages/390/296/png-clipart-arrow-computer-icons-right-angle-symbol-arrow-left-angle-logo.png"/>
            </div>
            
        </div>
    )
}

export default LogoDate
