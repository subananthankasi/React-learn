import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Addtask = () => {

    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')

   const Addtask = (e) => {
    e.preventDefault()
    console.log(title,description);
   }

  return (
    <>
    <Form onSubmit={Addtask}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Enter text</Form.Label>
      <Form.Control type="text" placeholder="Enter text" value={title} onChange={(e) => setTitle(e.target.value)} />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Text description</Form.Label>
      <Form.Control type="text" placeholder="Enter task description" value={description} onChange={(e) => setDescription(e.target.value)} />
    </Form.Group>
    <div className='text-end'>
    <Button variant="primary" type="submit" >
      Add Task
    </Button>
    </div>
  </Form>
  </>
  )
}

export default Addtask