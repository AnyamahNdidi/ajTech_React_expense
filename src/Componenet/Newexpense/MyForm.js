import React from 'react'
import "./style.css"
const MyForm = (props) => {
        const [title, setTitle] = React.useState("")
        const [amount, setAmount] = React.useState ("")
        const [date, setDate] = React.useState("")
    

    const handleTitle = (event) => {
        setTitle(event.target.value);
        // console.log(title)

}
    
    const handleAmounT = (event) => {
        setAmount(event.target.value);
        // console.log(amount);

}
    
const handleDatE = (event) => {
    setDate(event.target.value);
    // console.log(date);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let userData = {
            title: title,
            amount: amount,
            date: new Date(date)
            
        }

        // console.log(userData);
        setTitle("")
        setAmount("")
        setDate("")

        props.ongetExpense(userData)
        
    }
  return (
      <div>
          <form onSubmit={handleSubmit}>
              <div className='new_expense_controls'>
                  <div className='new_expense_control'>
                      <label>title</label>
                      <input type="text"
                          placeholder='title'
                          onChange={handleTitle}
                          value={ title} />
                  </div>
                   <div className='new_expense_control'>
                      <label>amount</label>
                      <input type="number"
                          min='0.1'
                          step="0.1"
                          onChange={handleAmounT}
                          value={ amount} />
                  </div>
                   <div className='new_expense_control'>
                      <label>date</label>
                      <input type="date"
                          min="2019-01-01"
                          max="2023-01-01"
                          onChange={handleDatE}
                          value={ date} />
                  </div>
              </div>
              <div className='new_expense_action'>
                  
                      <button type='button' onClick={props.handleShow}>cancel</button>
                      <button type='submit'>Submit</button>
                  </div>
          </form>
      </div>
  )
}

export default MyForm