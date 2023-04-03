import React, { useState } from 'react'
import Card from "../Card"
import "./expenseStyle.css"
import BorderCard from '../BorderCard'
import NewExpense from "../Newexpense/NewExpense"
import ExpenseFilter from './ExpenseFilter'


let inform=[
      {
            id: "234",
            title:"Koropke",
            amount:300,
            date: new Date( 2023, 3, 9,)
        },
      {
            id : "846",
            title:"food",
            amount:1500,
            date: new Date( 2022, 7, 9,)
        },
      {
            id : "763",
            title:"soap",
            amount:3500,
            date: new Date( 2019, 2, 9,)
        },
      {
            id : "300",
            title:"cloth",
            amount:25000,
            date: new Date( 2021, 4, 9,)
        },
      {
            id : "590",
            title:"bag",
            amount:9000,
            date: new Date( 2023, 10, 9,)
        }
    ]



const ExpenseHome = (props) => {

    const [myData, setmyData] = useState(inform)
    
    const [selectdate, setSelectdate] = React.useState("2020")

    const onhandleDate = (mydate) => {
        setSelectdate(mydate)
    }
    
  
   
   
    const addmyExpenser = (data) => {
        console.log("show dis console", data)
        // inform.push(data)
        setmyData([data, ...myData])
    }

    const myFilter = myData.filter((expense) => {
        return  expense.date.getFullYear().toString() === selectdate
    })


     
  return (
      <div>
        
          <div className='cardHold'>
              <NewExpense onhandle={addmyExpenser}  />
              <ExpenseFilter select={selectdate} onhandledate = {onhandleDate} />
              <BorderCard className='myHold'>
          {myFilter.length === 0 && <>no data Found</>}        
                
        {myFilter && myFilter.map((props)=>(
                <Card key={ props.id} title={props.title} amount={props.amount} date={props.date}/>
            ))}    
        </BorderCard>
        </div>
    </div>
  )
}

export default ExpenseHome