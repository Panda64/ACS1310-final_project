import './Name.css';
import React, { useState } from 'react'
import { useNavigate,  } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'

function Name() {

  let navigate = useNavigate()
  const [name, setName] = useState('')

  // Navigate and send user's name to the main page
  function handleSubmit(e){
    e.preventDefault();
    navigate('/map', { state: { name: e.target.name.value } })

  }

  // Updating name state on each keystroke for error handling
  function handleChange(e){
    e.preventDefault();
    setName(e.target.value)
  }

  return (
      
    <div className="NameMain">
        <h1 className="NameTitle">Jaylen's Travel Tracker</h1>
        <div className="NameFormWrapper">
            <Form onSubmit={handleSubmit} className="name_form">
                <Form.Label htmlFor="name">Your Name</Form.Label>
                <Form.Control type="text" name="name" onChange={handleChange}/>
                <Button variant="dark" type="submit" disabled={name.length < 1}>Submit</Button>
            </Form>
        </div>
    </div>
  )
}
  
export default Name