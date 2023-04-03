import React from "react"

const   Expensedata =(props)=>{
    return(
        <div  className="dateCon">
            {props.date.toLocaleString("en-US",{month:"long"})}<br/>
           &nbsp; {props.date.toLocaleString("en-US", {day:"2-digit"})}<br/>
            {props.date.getFullYear()}
        </div>
    )
}
export default Expensedata;