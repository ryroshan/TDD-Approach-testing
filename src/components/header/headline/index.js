import React from 'react'
import './style.css' 

function Headline({heading, desc}) {
    return (
        <div className='main'>
           
            <h1 className='heading' data-test='heading_h'>{heading}</h1>
            <h3 className='descp' data-test='decription'>{desc}</h3>
            
        </div>
    )
}

export default Headline;
