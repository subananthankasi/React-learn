import React, { useState } from 'react'
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const MyVerticallyCenteredModal = (props) => {
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')

    const Updatetask = () => {
        // props.onHide()
    }
  return (
   <>
   <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Update Task
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form >
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="text" placeholder="Enter text" value={title} onChange={(e) => setTitle(e.target.value)} />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Task description</Form.Label>
      <Form.Control type="text" placeholder="Enter task description" value={description} onChange={(e) => setDescription(e.target.value)} />
    </Form.Group>
   
  </Form>
       
      </Modal.Body>
      <Modal.Footer>
      <div className='text-end'>
        <Button variant="primary" type="submit" onClick={Updatetask}>
        Update task
        </Button>
        </div>
      </Modal.Footer>
     
    </Modal>
   </>
  )
}

export default MyVerticallyCenteredModal