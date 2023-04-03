import React from 'react'
import "./expenseStyle.css"


const ExpenseFilter = (props) => {
    const yearArray = ["2019","2020" ,"2021", "2022", "2023", "2024"]
    
    console.log(props.select);
    

    const onChangeData = (e) => {
        props.onhandledate(e.target.value)
    }

  return (
      <div className='holdfilter'>
          <div>Filter By Year</div>
        
              
          <div className='selectCon'>
              <select value={props.select} onChange={onChangeData}>
                  
                  
                  {
                  yearArray.map((props, i)=>(
                  <option key={i} value={props} >{props}</option>
                      
                      ))
                      
                  }
              </select> 
          </div>
      </div>
  )
}

export default ExpenseFilter