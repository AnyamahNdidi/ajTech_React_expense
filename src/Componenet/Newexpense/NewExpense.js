import React from 'react'
import MyForm from './MyForm'
import "./style.css"
const NewExpense = (props) => {

  const [show, setShow] = React.useState(false)

  const handleShow = () => {
    setShow(!show)
  }
 
  const onHandleExpense = (data) => {

    let myExpense = {
      ...data,
      id: Math.random().toString()
    }
    // console.log(myExpense)
    props.onhandle(myExpense)
    setShow(false)
    
  }
    return (
      <div className='new_control'>
        {!show &&  <button onClick={handleShow}>Adn New Expensae</button> }
        {show && <MyForm ongetExpense={onHandleExpense} handleShow={handleShow} /> }
        </div>
  )
}

export default NewExpense