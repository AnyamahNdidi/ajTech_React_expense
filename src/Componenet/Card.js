import React, {useState} from "react"
import Expensedata from "./Expensedata"
import "./style.css"
import BorderCard from "./BorderCard"

const Card = (props) => {
    let [myTitle, setMyTitle] = useState(props.title)
    console.log("kljdhdf", myTitle)
    
    // let title = props.title
    // console.log(title)

    let title = props.title

    const handlebutton = () => {
       console.log("hello world")
   }

    return (
        <div  > 
             <BorderCard  className="jamCard" >

       <Expensedata date={props.date}/>
        
        <div style={{
            marginLeft:"50px",
            fontSize:"25px",
            color:"EE2E31"
            
        }}>
                {props.title}
               
        </div>
        <div style={{
            marginLeft:"310px",
            fontSize:"25px",
            color:"EE2E31"
        }}>
            -₦{props.amount}
            </div>
          
            

        </BorderCard>
        </div>
       
    )
}
export default Card;