
import React from 'react'
import "./WritePage.css"

export default function WrtiePage() {
    return (
        <div className='WritePage'>
            <label >Select a file:
            <input type="file" id="myfile" className="myfile" accept=".png, .jpeg, .jpg"/>
            </label>    
            

        
        </div>
    )
}
